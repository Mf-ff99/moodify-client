import React from 'react';
import MoodApiService from '../services/MoodApiService'
import { Line } from 'react-chartjs-2';


export default class Chart extends React.Component {

    state = {
        labels: ['Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday', 
        'Sunday'],
        datasets: [
            {   label: 'your mood',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [0]
            },
        ],
        moods: []
    }
    //add second chart of past week
    //no limit on moods: show all
    //limit on second chart: show past week

    componentDidMount() {
        MoodApiService.getMoods()
            .then(res => {
                const newData = res.map(mood =>
                    mood.current_mood
                )
                const newDateAxis = res.map(mood => 
                        new Date(mood.date_added).toString().split(" ").slice(0, 4).join(" ")
                    )
                console.log(newDateAxis)
                this.setState({labels: newDateAxis, datasets: [{ label: 'your mood', data: newData}]})
            }
            )
            .then(res => {
                console.log(this.state.datasets[0])
            })
    }
    render() {

        return (
            <div>
                <Line
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'All time moods',
                            fontSize: 20
                        },
                        legend: {
                            fontSize: 20,
                            position: 'right',
                            display: true,
                        }
                    }}
                />
            </div>
        );
    }
}