import React from 'react'

export default class Hero extends React.Component {
    render() {
        const { image, heading, text, link } = this.props.card;
        return (
            <div className="card">
                <img src={image.url} alt={image.alt} />
                <h3>{heading}</h3>
                <p>{text}</p>
                <hr className="dots" />
                <button className="btn btn-primary" link={link.url}>{link.text}</button>
            </div>
        )
    }
}
