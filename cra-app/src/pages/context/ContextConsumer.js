import React, { Component, Fragment } from 'react';
import { ThemeConsumer } from './Context';
export default class ContextConsumer extends Component {
    render() {
        return (
            <Fragment>
                <ThemeConsumer>
                    {
                        ThemeConsumer => <div className={ThemeConsumer.ThemeColor}>ContextConsumer</div>
                    }
                </ThemeConsumer>
            </Fragment>
        );
    }
}