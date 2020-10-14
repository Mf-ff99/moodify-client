import React from 'react'
import { Link } from 'react-router-dom'
import MoodApiService from '../services/MoodApiService'

export default class AddMood extends React.Component {

    state = {
        requiredStatesChecked: false,
    }

    handleSubmitMood = e => {
        e.preventDefault()
        const { mood, moodNote, category } = e.target
    
        
        MoodApiService.postMood(moodNote.value, Number(mood.value), category.value)
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
                <form className="add-mood-form" onSubmit={this.handleSubmitMood}>
                    <label htmlFor="mood">What's your mood, one being the worst you could possibly feel, 10 being the best?</label>
                    <select name="mood" required onChange={this.handleDisplaySubmitBtn}>
                        <option value={1}>1 - horrible :(</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5 - could be better, could be worse</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10 - it doesn't get better than this!</option>
                    </select>
                    <br />
                    <label htmlFor="category">What category would you like to put your mood in?</label>
                    <select name="category" required>
                        <option value={1}>Work</option>
                        <option value={5}>Play</option>
                        <option value={3}>Substances</option>
                        <option value={2}>Study</option>
                        <option value={4}>Day off</option>
                    </select>
                    <br />
                    <label htmlFor="sleep-time">How many hours did you sleep last night?</label>
                    <select required>
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
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