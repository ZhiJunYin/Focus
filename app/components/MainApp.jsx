'use strict';

import TimerBox from './TimerBox.jsx';
import TodoBox from './TodoBox.jsx';

class MainApp extends React.Component {
  constructor() {
    super();
    var _todoData = [
      { todo: "加購票券樣式調整", done: false},
      { todo: "輸入關鍵字，預設帶第一筆資料", done: false},
      { todo: "static map", done: true}
    ];
    this.state = { data : _todoData};
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
