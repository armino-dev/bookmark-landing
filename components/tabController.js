import React from 'react';
import TabContent from './tabController/tabContent';

export default class TabController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab ?? 0,
        }
        this.handleTabClick = this.handleTabClick.bind(this);
        this.tabData = props.tabData ?? [];
    }

    handleTabClick(e) {
        const btn = e.target;
        const index = btn.dataset.tabIndex;
        this.setState({
            activeTab: Number.parseInt(index),
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", this.state );
    }

    componentDidMount() {
        console.log("componentDidMount", this.state );
    }

    render() {
        return (
            <div className="tab-controller">
                <div className="tab-bar">
                    {this.tabData.map((tab, index) => {
                        return (
                            <button 
                                key={index}
                                data-tab-index={index}
                                className={`tab-item ${this.state.activeTab === index ? "active" : ""}`}
                                onClick={(e) => this.handleTabClick(e)}>{tab.title}
                            </button>
                        )
                    })}
                </div>
                <div className="tab-container">
                    {this.tabData.map((tab, index) => {
                        return <TabContent 
                            key={index}
                            activeTab={this.state.activeTab}
                            index={index}
                            image={tab.image}
                            heading={tab.heading}
                            text={tab.text} />
                    })}
                </div>
            </div>
        )
    }
}
