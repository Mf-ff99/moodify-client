import React from 'react'

//display the fetched mood with props, reusable function

export default function Mood(props) {
    console.log(props)

    return (
        <li className="mood-item">
                {/* condensed view */}
                <h2>{props.props.current_mood}/10</h2>
                <h3>{props.props.date_added}</h3>
        </li>
    )
}