import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import MoodApiService from '../services/MoodApiService'
import Mood from './mood'


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
            <h1>Your overall mood:</h1>
            <h4>*insert chart of past month's moods arranged in a React multi-series chart</h4>
          </div>
          <div class="add-mood-btn-container">
            <Link to="/add-mood"><button type="click" className="add-mood-btn">Add a mood</button></Link>
          </div>
          <div class="past-moods">
            <h1>Your past moods:</h1>
            <br />
            <ul id="mood-list" className="past-moods-list">
              <hr />
              {allMoods.map(mood => {
              return <Mood props={mood}/>
            })}
              <li className="mood">
                <h2>10/10</h2>
                <h3>9/15/2020</h3>
                <br />
                <h3>9/15/2020 6:54 PM</h3>
                <h3>Notes:</h3>
                <p>I was way happier today than I was in the last week, maybe it was because I got to see my family? I don't know, I should keep tracking my mood to see.</p>
                <p>Hours slept: 7</p>
              </li>
              <hr />
            </ul>
          </div>
        </section>
      </>
    )
  }
}