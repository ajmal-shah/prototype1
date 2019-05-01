import React, { Component } from 'react';
import "./layout.css";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import * as constants from './common/constants';

//Scenes
import Opening from "./scenes/opening/opening";
import FinallyAsleep from "./scenes/finallyAsleep/finallyAsleep";

class Layout extends Component {
    constructor() {
        super();
        this.state = {
            pageIndex: 0,
        };
    }

    componentWillMount() {

    }

    fetchPage() {
        console.log(constants.PAGE_INDEX.OPENING);
        switch (this.state.pageIndex) {
            case constants.PAGE_INDEX.OPENING: return (<Opening nextScene={this.nextScene.bind(this)} />);
            case constants.PAGE_INDEX.FINALLY_ASLEEP: return (<FinallyAsleep nextScene={this.nextScene.bind(this)} />);
            default: return null;
        }
    }

    nextScene(pageIndex) {
        this.setState({
            pageIndex
        })
    }

    render() {
        let page = this.fetchPage();
        { console.log(page) }
        return (
            <ReactCSSTransitionGroup
                key={this.state.pageIndex}
                transitionName="scene"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {page}
            </ReactCSSTransitionGroup>
        )
    }
}

export default Layout;