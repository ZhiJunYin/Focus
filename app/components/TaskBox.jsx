'use strict';

import TaskList from './TaskList.jsx';
import actions from '../actions/ActionCreator';

class comp extends React.Component {
  render(){
    var taskData = this.props.truth.data;
    var keyword = this.props.truth.filter;

    var arrTask = taskData.filter(function(data){
      return data.todo.indexOf(keyword) !== -1;
    }).map(function(data, i){
      return <TaskList truth={data} key={i} onRemove={this.removeTask} />
    }, this);

    return (
      <ul className="taskBox">
        {arrTask}
      </ul>
    );
  }
  removeTask(comp){
    actions.handleRemoveTask(comp.props.truth.todo);
  }
}

export default comp;
