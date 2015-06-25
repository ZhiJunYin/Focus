'use strict';

// import './scss/app.scss';
import TimerBox from './TimerBox.jsx';
import TodoBox from './TodoBox.jsx';

// render
class MainApp extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <TimerBox />
        <TodoBox />
      </div>
    )
  }
}

// React.render( <App />, document.getElementById('app'));
export default  MainApp;
