import React, { Component, Fragment } from 'react';
import {ThemeProvider} from './Context';
import ContextPage from './ContextPage';
import ContextHook from './ContextHook';
import ContextConsumer from './ContextConsumer';
import './index.css';
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: {
                ThemeColor: 'red'
            }
        }
    }
    changeTheme = () => {
        this.setState({
            value: {
                ThemeColor: this.state.value.ThemeColor === 'blue' ? 'red' : 'blue'
            }
        })
    }
    render() {
        // ! 注意,不要这样设置Provider的value={{ThemeColor: 'green'}},因为Provider的实现原理是 比较value,如果value更新了则更新子组件,否则不更新子组件
        // ! {ThemeColor: 'green'} 永远不等于{ThemeColor: 'green'},所以为了防止这种情况我们要将value状态提升至父节点的state中
        return (
            <Fragment>
                <button onClick={this.changeTheme}>修改主题</button>
                <ThemeProvider value={this.state.value}>
                    <ContextPage />
                    <ContextHook />
                    <ContextConsumer />
                    <ThemeProvider value={{ThemeColor: 'green'}}>
                        <ContextPage />
                        <ContextHook />
                        <ContextConsumer />
                    </ThemeProvider>
                </ThemeProvider>
            </Fragment>
        );
    }
}