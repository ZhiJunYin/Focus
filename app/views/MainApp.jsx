'use strict';

import TimerBox from './TimerBox.jsx';
import TodoBox from './TodoBox.jsx';

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

export default  MainApp;
