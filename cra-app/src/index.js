import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import ContextPage from './pages/context/HomePage';
import HocPage from './pages/hoc/HomePage';
import CodePage from './pages/code/Index';
import HooksPage from './pages/hooks/Index';
// import reportWebVitals from './reportWebVitals';

// ! 注意 Router要是BrowserRouter.否则会报错 Cannot read property 'location' of undefined (因为react-router更新了,但是文档没有更新)
// ! 要从react-router-dom中导入Route,Router等 而不是react-router
// ! 嵌套路由 要像下面这样写,不能写成
{/* <Route path="/" component={App}>
  <Route path="/about" component={ContextPage} />
  <Route path="/inbox" component={HocPage} />
</Route> */}
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Route path="/context" component={ContextPage} />
        <Route path="/hoc" component={HocPage} />
        <Route path="/code" component={CodePage} />
        <Route path="/hooks" component={HooksPage} />
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// reportWebVitals(console.log)

