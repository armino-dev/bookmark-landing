import React from "react";

class TabContent extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", this.props);
    }

    render() {
        const { activeTab, index, image, heading, text, link} = this.props;
        return (
            <div className={`tab-content ${activeTab === index ? "active" : ""}`}>
                <div className="tab-image-container">
                    <div className="tab-image-background"></div>
                    <img className="tab-image" src={image} alt={heading} />
                </div>
                <div className="tab-text">
                    <h3>{heading}</h3>
                    <p>{text}</p>
                    <button className="btn btn-primary" link={link}>More Info</button>
                </div>
            </div>
        );
    }
}

export default TabContent;
