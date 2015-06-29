'use strict';

import TimerBox from './TimerBox.jsx';
import TodoBox from './TodoBox.jsx';

class MainApp extends React.Component {
  render() {
    return (
      <div className="appContainer">
        <TimerBox className="TimerBox" />
        <TodoBox className="TodoBox" />
        <div className="clear"></div>
      </div>
    )
  }
}

export default  MainApp;
