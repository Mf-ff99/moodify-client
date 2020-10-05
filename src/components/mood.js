import React from 'react'

//display the fetched mood with props, reusable function

export default class Mood extends React.Component {
    state = {
        expanded: false,
    }

    handleExpand = () => {
        const newState = !this.state.expanded
        this.setState({
            expanded: newState
        })
    }
    render() {
        return (
            <>
                {!this.state.expanded ? 
               <li className="mood-item" onClick={this.handleExpand}>
                <h2>{this.props.props.current_mood}/10</h2>
                <h3>{this.props.props.date_added}</h3>
            </li> : <li className="mood" onClick={this.handleExpand}>
            <h2>{this.props.props.current_mood}/10</h2>
            <h3>{this.props.props.date_added}</h3>
            <br />
            <h3>{this.props.props.date_added}</h3>
            <h3>Notes:</h3>
            <p>{this.props.props.note}</p>
            <p>Hours slept: 7</p>
          </li>}
          </>
        )
    }
}