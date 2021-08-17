import React from 'react'
export default class TabController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        const tabData = [
            {

            },
        ]
        return (
            <div className="tab-controller">
                <div className="tab-bar">
                    <button className="tab-item active">Simple Bookmarking</button>
                    <button className="tab-item">Speedy Searching</button>
                    <button className="tab-item">Easy Sharing</button>
                </div>
                <div className="tab-container">
                    <div className="tab-content active">
                        <div className="tab-image-container">
                            <div className="tab-image-background"></div>
                            <img className="tab-image" src="/images/illustration-features-tab-1.svg" alt="Illustration features 1" />
                        </div>
                        <div className="tab-text">
                            <h3>Bookmark in one click</h3>
                            <p>Organize your bookmarks however you like.
                            Our simple drag-and-drop interface gives you complete control over how you manage your
                      favourite sites.</p>
                            <button className="btn btn-primary">More Info</button>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-image-container">
                            <div className="tab-image-background"></div>
                            <img className="tab-image" src="/images/illustration-features-tab-2.svg" alt="Illustration features 1" />
                        </div>
                        <div className="tab-text">
                            <h3>Intelligent search</h3>
                            <p>Our powerful search feature will help you find saved sites in no time at all.
                      No need to trawl through all of your bookmarks.</p>
                            <button className="btn btn-primary">More Info</button>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-image-container">
                            <div className="tab-image-background"></div>
                            <img className="tab-image" src="/images/illustration-features-tab-3.svg" alt="Illustration features 1" />
                        </div>
                        <div className="tab-text">
                            <h3>Share your bookmarks</h3>
                            <p>Easily share your bookmarks and collections with others.
                      Create a shareable link that you can send at the click of a button.</p>
                            <button className="btn btn-primary">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}