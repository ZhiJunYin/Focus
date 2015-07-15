'use strict';

import TimerBox from './TimerBox.jsx';
import TodoBox from './TodoBox.jsx';

function getStateFromStore(){
  var _todoData = [
    { todo: "加購票券樣式調整", done: false},
    { todo: "輸入關鍵字，預設帶第一筆資料", done: false},
    { todo: "static map", done: true}
  ];
  return _todoData;
}

class MainApp extends React.Component {
  constructor() {
    super();
    this.state = { data : getStateFromStore()};
  }
  render() {
    return (
      <div className="appContainer">
        <TimerBox className="timerBox" />
        <TodoBox className="todoBox" truth={this.state.data} />
        <div className="clear"></div>
      </div>
    )
  }
}

export default  MainApp;
