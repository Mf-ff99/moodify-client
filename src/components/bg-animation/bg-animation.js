import React from 'react'
import './bg-animation.css' 

export default class BGAnimation extends React.Component {

    render() {
        return (
            <section className="animation-footer">
                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
            </section>
        )
    }
}