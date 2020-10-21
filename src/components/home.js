import React from 'react'
import { Link } from 'react-router-dom'
import MoodApiService from '../services/MoodApiService'
import Mood from './mood'
import Chart from './chart'
import QuoteGenerator from './quote-generator'

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


  render() {
    let allMoods = this.state.moods
    let sortedMoods = allMoods.sort(function (x, y) {
      return new Date(y.date_added) - new Date(x.date_added);
    })

    return (
      <section className="home-view" >
        <div className="quote-generator-container">
          <QuoteGenerator />
        </div>
        <section className="home-page">

          <div className="mood-display" id="mood-display">
            <h1>How have you been feeling recently?</h1>
            <div className="add-mood-filter-btn-container">
            </div>


            <br />
            <div className="chart-container">
              <Chart props={this.state.moods} />
            </div>

          </div>
          <div className="past-moods">
            <Link to="/add-mood"><button type="click" className="add-mood-btn">Add a mood</button></Link>
            <ul id="mood-list" className="past-moods-list">
              <br />
              {sortedMoods.map(mood => {
                return <Mood key={mood.id} props={mood} />
              })}
            </ul>
          </div>
        </section>
      </section>
    )
  }
}