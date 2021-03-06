import React from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends React.Component {

    render() {
        return (
            <section className="splash-page">
                <header>
                    <h1>Welcome <span className="splash-page-to">to</span> Moodify!</h1>
                </header>
                <div className="splash-page-tutorial">
                    <p>Welcome to Moodify! Here you can track your mood and watch for particular spikes and dips. Part of being well is understanding how you feel and why you feel the way you do. Keeping track of your moods is a healthy habit to start, why not start today!</p>
                    <br />
                    <p>
                        Here you can enter your mood, amount of sleep, and a few sentences, or even a few paragraphs, about why you feel the way you do.</p>
                    <br />
                    <p>Many people find it helpful and theuraputic to record their moods as well as their thoughts. Moodify builds a comprehensive database of your moods and allows you to view, sort, and add your current mood. Please note, the more often you record your mood and the more information you record along with it, the more helpful it becomes.
                        </p>
                        <br />
                    <p>You can either register a new account to get started with a blank state, or log in with the pre-populated values to demo the application!</p>
                    <Link to="/home"><button type="click" className="splash-page-btn">Start your journey!</button>
                    </Link>
                </div>
            </section>
        )
    }
}