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

    handleCategory = (catId) => {
        switch(catId){
            case 1:
                return 'Work'
                
            case 2:
                return 'Study'
                
            case 3:
                return 'Substances'
                
            case 4:
                return 'Day off'
                
            case 5:
                return 'Play'
              
            default:
                return;
        }
    }

    render() {

        return (
            <>
                {!this.state.expanded ? 
               <li className="mood-item" onClick={this.handleExpand}>
                <h2>{this.props.props.current_mood}/10</h2>
                <h3>{ new Date(this.props.props.date_added).toString().split(" ").slice(0, 4).join(" ")}</h3>
            </li> : <li className="mood" onClick={this.handleExpand}>
            <h2>{this.props.props.current_mood}/10</h2>
            <h3>{}</h3>
            <br />
            <h3>{this.props.props.date_added}</h3>
            <h3>Notes:</h3>
            <p>{this.props.props.note}</p>
            <p>Hours slept: 7</p>
            <p>Category: {this.handleCategory(this.props.props.category_id)}</p>
          </li>}
          </>
        )
    }
}