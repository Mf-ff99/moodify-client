import React from 'react'
import { Link } from 'react-router-dom'
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

  handleFiltering = (e) => {
    const filterVar = e.target.value
    let filteredMoods
    let allMoods = this.state.moods
    let sortedMoods = allMoods.sort(function (x, y) {
      return new Date(y.date_added) - new Date(x.date_added);
    })
    var seventhDay = new Date();
    var thirtyDay = new Date();
    
    seventhDay.setDate(seventhDay.getDate() - 7)
    thirtyDay.setDate(thirtyDay.getDate() - 30)
    // console.log('seventh day ', seventhDay.getTime())

    switch (filterVar) {
      case 'pastWeek':
        //call function to query the DB and set
        //state to an array filtered by past week
        filteredMoods = sortedMoods.filter((d) => {
          // console.log(new Date(d.date_added).getTime() >= seventhDay.getTime())
          if(new Date(d.date_added).getTime() >= seventhDay.getTime()) {
            return d;
          } else {
            return null;
          };
        });
        this.setState({
          moods: filteredMoods,
        })
        break;
      case 'pastMonth':
        sortedMoods.filter((d) => {
          return new Date(d.date_added).getTime() >= thirtyDay.getTime();
        })
        console.log('pastMonth ', allMoods)
        this.setState({
          moods: sortedMoods,
        })
        break;
      case 'allTime':
        return;
      default:
        return;
    }
  }


  render() {
    let allMoods = this.state.moods
    let sortedMoods = allMoods.sort(function (x, y) {
      return new Date(y.date_added) - new Date(x.date_added);
    })

    return (
      <>
        <section className="home-page">
          <div className="mood-display">
            <h1>How have you been feeling recently?</h1>
            <div className="add-mood-filter-btn-container">
              <Link to="/add-mood"><button type="click" className="add-mood-btn">Add a mood</button></Link>
              {/* <select name="filter" onChange={this.handleFiltering}>
                <option value="pastWeek">Past week</option>
                <option value="pastMonth">Past month</option>
                <option value="allTime">All time</option>
              </select> */}
            </div>
            <br />
            <Chart props={this.state.moods} />
          </div>
          <div className="past-moods">
            <h1>Your past moods:</h1>
            <br />
            <ul id="mood-list" className="past-moods-list">
              <hr />
              {sortedMoods.map(mood => {
                return <Mood key={mood.id} props={mood} />
              })}
            </ul>
          </div>
        </section>
      </>
    )
  }
}