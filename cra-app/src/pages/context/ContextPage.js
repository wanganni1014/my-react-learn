import React, { Component, Fragment } from 'react';
import {ThemeContext} from './Context';
export default class ContextPage extends Component {
    static contextType = ThemeContext;
    
    render() {
        return (
            <Fragment>
                <div className={this.context.ThemeColor}>ContextPage</div>
            </Fragment>
        );
    }
}