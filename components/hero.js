import React from 'react'

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero-container">
                <div className="hero-image"> </div>
                <div className="hero-text">
                    <h1>A Simple Bookmark Manager</h1>
                    <p>A clean and simple interface to organize your favorite websites.
                        Open a new browser tab and see your sites load instantly.
                        Try it for free.</p>
                    <div className="call-to-action row">
                        <a href="#" className="btn btn-primary">Get it on Chrome</a>
                        <a href="#" className="btn btn-secondary">Get it on Firefox</a>
                    </div>
                </div>
            </div>
        )
    }
}
