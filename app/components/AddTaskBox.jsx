'use strict';

import actions from '../actions/ActionCreator';

class comp extends React.Component {
  componentDidMount(){
    this.$addInput = $(React.findDOMNode(this)).find('.addInput');
  }
  render() {
    return (
      <div className="addTaskBox">
        <div className="inputGroup">
          <input className="addInput" type="text" placeholder="今天想做什麼呢？" />
        </div>
        <button className="addButton" onClick={ this.handleAddTask.bind(this)}>
          <i className="fa fa-plus"></i>
          新增項目
        </button>
        <div className="clear"></div>
      </div>
    );
  }
  handleAddTask(){
    var newTask = this.$addInput.val();
    actions.handleAddTask(newTask);
  }
}

export default comp;
