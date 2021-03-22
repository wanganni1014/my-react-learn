import { Link } from 'react-router-dom'
function App(props) {
  return (
    <div className="parent">
      <div className="left">
        <ul>
          <li><Link to="/context">context</Link></li>
          <li><Link to="/hoc">hoc</Link></li>
          <li><Link to="/code">源码学习</Link></li>
          <li><Link to="/hooks">hooks</Link></li>
        </ul>
      </div>
      <div className="right">{props.children}</div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <div>什么时候会⽤Hook? 如果你在编写函数组件并意识到需要向其添加⼀些state，以前的做法是必须将其它转化为class。现在你可以在现有的函数组件中使⽤Hook。</div>
    //     <div>useEffect 相当于didmount和didupdate,还可以return 一个 willUnmount</div>
    //     <div>在函数组件主体内(这⾥指在 React 渲染阶段)改变 DOM、添加订阅、设置定时器、记录⽇志以及执⾏其他包含副作用的操作都不被允许的，因为这可能会产⽣生莫名其妙的 bug 并破坏 UI 的⼀致性。</div>
    //     <div>自定义组件必须以use开头,返回值,hook必须定义在函数最外层,不允许在循环,条件判断和函数中调用的,也不能在其他javascript函数中调用...即只能在react函数组件中调用</div>
    //   </header>
    // </div>
  );
}

export default App;
