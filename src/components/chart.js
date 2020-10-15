import React from 'react';
import MoodApiService from '../services/MoodApiService'
import { Line } from 'react-chartjs-2';

export default class Chart extends React.Component {

//this state controls the chart's datasets
//yAxisID can be set to display two dynamic y-values for two different
//datasets on the same chart

    state = {
        labels: ['your mood', 'hours slept'],
        datasets: [
            {
                label: 'your mood',
                yAxisID: 'y-axis-1',
                fill: true,
                lineTension: 0.6,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                pointBorderWidth: 2,
                pointRadius: 6,
                data: [0],
            },
            {
                label: 'hours slept',
                yAxisID: 'y-axis-2',
                fill: false,
                lineTension: .5,
                backgroundColor: '#5B4E77',
                borderColor: '#5B4E77',
                borderWidth: 2,
                pointBorderWidth: 2,
                pointRadius: 6,
                data: [0],

            }
        ],
        moods: []
    }

//make an fetch call to the Moodify-API 
//set state with the fetched data, defaulting to all-time view
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
                const hoursSlept = res.map(mood =>
                    mood.hours_slept
                )
                const newDateAxis = res.map(mood =>
                    new Intl.DateTimeFormat('en-US', options).format(new Date(mood.date_added))
                )
                this.setState({ moods: res, labels: newDateAxis, datasets: [{ label: 'your mood', data: newData }, { label: 'hours slept', data: hoursSlept }] })
            }
            )
            .catch(err => {
                console.log(err.message)
            })
    }

    //Filtering by date was a small challenge, and I was pleasantly
    //surprised with the fluidity of the outcome.
    //switch-case can be ugly to look at but there is beauty in the 
    //simplicity.
    //x-axis is sorted for both datasets, current_mood and hours_slept
    //each case sets the state with the appropriate values

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

        const filteredHoursSlept = sortedMoods.map(mood => mood.hours_slept)

        switch (filterVar) {
            case 'pastWeek':
                filteredMoods = sortedMoods.filter((d) => {
                    return new Date(d.date_added).getTime() > seventhDay.getTime()
                }).sort(function (x, y) {
                    return new Date(x.date_added) - new Date(y.date_added);
                });
                const pastWeekHoursSlept = filteredMoods.map(mood => mood.hours_slept)
                const filtered = filteredMoods.map(mood =>
                    mood.current_mood
                )
                const datesForMoods = filteredMoods
                const newDateAxis = datesForMoods.map(mood =>
                    new Intl.DateTimeFormat('en-US', options).format((new Date(mood.date_added)))
                )
                this.setState({ labels: newDateAxis, datasets: [{ label: 'your mood', data: filtered }, { label: 'hours slept', data: pastWeekHoursSlept }] })
                break;
            case 'pastMonth':
                const monthFilteredMoods = sortedMoods.filter((d) => {
                    return new Date(d.date_added).getTime() >= thirtyDay.getTime()

                }).sort(function (x, y) {
                    return new Date(x.date_added) - new Date(y.date_added);
                });

                const pastMonthHoursSlept = monthFilteredMoods.map(mood => mood.hours_slept)

                const monthFiltered = monthFilteredMoods.map(mood =>
                    mood.current_mood
                )

                const newFilteredDateAxis = monthFilteredMoods.map(mood =>
                    new Intl.DateTimeFormat('en-US', options).format((new Date(mood.date_added)))
                )
                this.setState({ labels: newFilteredDateAxis, datasets: [{ label: 'your mood', data: monthFiltered }, { label: 'hours slept', data: pastMonthHoursSlept }] })

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
                this.setState({ labels: allTimeDateAxis, datasets: [{ label: 'your mood', data: allTimeMoods }, { label: 'hours slept', data: filteredHoursSlept }] })
                break;
            default:
                return;
        }
    }

// The chart needs to be passed the appropriate values 
//on render, but it can be used elsewhere with some minor refactoring.
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
                        },
                        scales: {
                            xAxes: [{
                                barPercentage: 0.5,
                                barThickness: 22,
                                maxBarThickness: 38,
                                minBarLength: 18,

                                ticks: {
                                    beginAtZero: false
                                }
                            }],

                            yAxes: [
                                {
                                    type: 'linear',
                                    display: true,
                                    position: 'left',
                                    id: 'y-axis-1',
                                    labels: {
                                        show: false
                                    },
                                    ticks: {
                                        suggestedMin: 1,
                                        suggestedMax: 10,
                                    }

                                },
                                {
                                    type: 'linear',
                                    display: true,
                                    position: 'right',
                                    gridLines: {
                                        display: false,
                                    },
                                    id: 'y-axis-2',
                                    labels: {
                                        show: true,
                                    },
                                    ticks: {
                                        suggestedMin: 1,
                                        suggestedMax: 14,
                                    }
                                }
                            ]
                        }

                    }}
                />
            </div>
        );
    }
}