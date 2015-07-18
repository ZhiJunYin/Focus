'use strict';

import TimerBox from './TimerBox.jsx';
import TodoBox from './TodoBox.jsx';
import Store from '../stores/Store';

function getStateFromStore(){
  var _todoData;
  return _todoData = Store.getAll();
}

class MainApp extends React.Component {
  constructor() {
    super();
    this.state = { data : getStateFromStore()};
  }
  onChange(){
    this.setState({ data : getStateFromStore()});
  }
  componentDidMount(){
    Store.addChangeListener( this.onChange.bind(this));
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
