import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import MoodApiService from '../services/MoodApiService'
import Mood from './mood'
import Chart from './chart'


export default class Home extends React.Component {
  state = {
    moods: []
  }

  componentDidMount() {
    MoodApiService.getMoods()
      .then(res => {
        this.setState({
          moods: res,
        })
      })
  }

  //populate chart
  //populate page with moods

  render() {
    let allMoods = this.state.moods
    return (
      <>
        <section className="home-page">
          <div className="mood-display">
            <h1>How have you been feeling recently?</h1>
            <div className="add-mood-btn-container">
            <Link to="/add-mood"><button type="click" className="add-mood-btn">Add a mood</button></Link>
          </div>
          <br />
            <Chart props={allMoods}/>
          </div>
          <div className="past-moods">
            <h1>Your past moods:</h1>
            <br />
            <ul id="mood-list" className="past-moods-list">
              <hr />
              {allMoods.map(mood => {
              return <Mood key={mood.id} props={mood}/>
            })}
            </ul>
          </div>
        </section>
      </>
    )
  }
}