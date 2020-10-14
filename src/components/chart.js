import React from 'react';
import MoodApiService from '../services/MoodApiService'
import { Line } from 'react-chartjs-2';

export default class Chart extends React.Component {

    state = {
        labels: ['Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday',
            'Sunday'],
        datasets: [
            {
                label: 'your mood',
                fill: true,
                lineTension: 0.7,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                pointBorderWidth: 2,
                pointRadius: 6,
                data: [0]
            },
        ],
        moods: []
    }


    componentDidMount() {
        const options = {
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
           
        }
        MoodApiService.getMoods()
            .then(res => {
                const newData = res.map(mood =>
                    mood.current_mood
                )
                const newDateAxis = res.map(mood =>
                    new Intl.DateTimeFormat('en-US', options).format(new Date(mood.date_added))
                )
                this.setState({ moods: res, labels: newDateAxis, datasets: [{ label: 'your mood', data: newData }] })
            }
            )
            .catch(err => {
                console.log(err.message)
            })
    }


    handleFiltering = (e) => {
        const filterVar = e.target.value
        let filteredMoods
        let allMoods = this.state.moods
        let sortedMoods = allMoods.sort(function (x, y) {
            return new Date(y.date_added) - new Date(x.date_added);
        })
        const seventhDay = new Date();
        const thirtyDay = new Date();

        seventhDay.setDate(seventhDay.getDate() - 6)
        thirtyDay.setDate(thirtyDay.getDate() - 29)

        const options = {
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
           
        }

        switch (filterVar) {
            case 'pastWeek':
                //call function to query the DB and set
                //state to an array filtered by past week
                filteredMoods = sortedMoods.filter((d) => {
                    return new Date(d.date_added).getTime() > seventhDay.getTime()
                }).sort(function (x, y) {
                    return new Date(x.date_added) - new Date(y.date_added);
                });
                const filtered = filteredMoods.map(mood =>
                    mood.current_mood
                )
                const datesForMoods = filteredMoods
                const newDateAxis = datesForMoods.map(mood =>
                    new Intl.DateTimeFormat('en-US', options).format((new Date(mood.date_added)))
                )
                this.setState({ labels: newDateAxis, datasets: [{ label: 'your mood', data: filtered }] })
                break;
            case 'pastMonth':
                const monthFilteredMoods = sortedMoods.filter((d) => {
                    return new Date(d.date_added).getTime() >= thirtyDay.getTime()

                }).sort(function (x, y) {
                    return new Date(x.date_added) - new Date(y.date_added);
                });

                const monthFiltered = monthFilteredMoods.map(mood =>
                    mood.current_mood
                )

                const newFilteredDateAxis = monthFilteredMoods.map(mood =>
                    new Intl.DateTimeFormat('en-US', options).format((new Date(mood.date_added)))
                )
                this.setState({ labels: newFilteredDateAxis, datasets: [{ label: 'your mood', data: monthFiltered }] })

                break;
            case 'allTime':
                const allTimeMoodsSorted = sortedMoods.sort(function (x, y) {
                    return new Date(x.date_added) - new Date(y.date_added);
                });
                const allTimeMoods = allTimeMoodsSorted.map(mood =>
                    mood.current_mood
                )
                const allTimeDateAxis = allTimeMoodsSorted.map(mood =>
                    new Intl.DateTimeFormat('en-US', options).format((new Date(mood.date_added)))
                )
                this.setState({ labels: allTimeDateAxis, datasets: [{ label: 'your mood', data: allTimeMoods }] })
                break;
            default:
                return;
        }
    }


    render() {

        return (
            <div id="chart-js">
                <select name="filter" id="chart-filter" onChange={this.handleFiltering} defaultValue="allTime">
                    <option value="pastWeek">Past week</option>
                    <option value="pastMonth">Past month</option>
                    <option value="allTime">All time</option>
                </select>
                <br />
                <Line
                className="chart-js-true"
                    data={this.state}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Your mood history',
                            fontSize: 20,
                        },
                        legend: {
                            fontSize: 20,
                            position: 'top',
                            display: true,
                        }
                    }}
                />
            </div>
        );
    }
}