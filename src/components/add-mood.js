import React from 'react'
import { Link } from 'react-router-dom'
import MoodApiService from '../services/MoodApiService'

export default class AddMood extends React.Component {

    state = {
        requiredStatesChecked: false,
    }

    handleSubmitMood = e => {
        e.preventDefault()
        const { mood, moodNote } = e.target
    

        MoodApiService.postMood(moodNote.value, Number(mood.value))
            .then(this.onLoginSuccess())
    }

    onLoginSuccess = () => {
        this.props.history.push('/home')
      }
    //on add success refresh state to display new values

    handleDisplaySubmitBtn = (e) => {
        this.setState({
            requiredStatesChecked: !this.state.requiredStatesChecked
        })
    }

    render() {
        return (
            <section className="add-mood">
                <h1>Add a mood!</h1>
                <form onSubmit={this.handleSubmitMood}>
                    <label htmlFor="mood">What's your mood, one being the worst you could possibly feel, 10 being the best?</label>
                    <select name="mood" required onChange={this.handleDisplaySubmitBtn}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <br />
                    <label htmlFor="sleep-time">How many hours did you sleep last night?</label>
                    <select required>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                    </select>
                    <br />
                    <label htmlFor="mood-note">Note:</label>
                    <textarea type="text" name="moodNote" placeholder="Say something about how you're feeling, it will help you in the long run!" required>
                    </textarea>
                    <br />
                   <button type="submit" id="submit-mood-btn">Send it in</button>
                    <br />
                    <Link to="/home"><button type="click" id="cancel-mood-btn">Cancel</button></Link>

                </form>
            </section>
        )
    }
}