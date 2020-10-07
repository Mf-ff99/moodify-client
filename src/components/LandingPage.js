import React from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {

    render() {
        return (
            <section className="splash-page">
                <header>
                    <h1>Welcome to Moodify!</h1>
                </header>
                <div className="splash-page-tutorial">
                    <p>Welcome to Moodify! Here you can track your mood and watch for particular spikes and dips. Part of being well is understanding how you feel and why you feel the way you do. Keeping track of your moods is a healthy habit to start, why not start today!</p>
                    <p>
                        Here you can enter your mood, amount of sleep, and a few sentences, or even a few paragraphs, about why you feel the way you!
      </p>
                    <Link to="/home"><button type="click" className="splash-page-btn">Start your journey!</button>
                    </Link>
                </div>
            </section>
        )
    }
}