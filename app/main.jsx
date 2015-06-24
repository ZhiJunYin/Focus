'use strict';

import './scss/app.scss';
import Timer from './view/Timers.jsx';
import TodoBox from './view/TodoBox.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <Timer />
        <TodoBox />
        <p> aaaaaa測試atom</p>
      </div>
    )
  }
}

React.render( <App />, document.getElementById('app'));
