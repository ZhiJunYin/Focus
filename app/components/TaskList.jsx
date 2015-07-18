'use strict';

import actions from '../actions/ActionCreator';

class comp extends React.Component {

  componentDidMount(){
    this.$task = $(React.findDOMNode(this)).find('.task');
  }

  render(){
    var taskClasses = classSet({
      'task': true,
      'done': this.props.truth.done
    });
    return(
      <li className="taskList">
        <label className="taskWrapper"
          onClick = { this.switchTask.bind(this)}>

          <span className={ taskClasses}
                onBlur={ this.endEditTask.bind(this)}
                onKeyDown={this.pressEnter.bind(this)}>
            { this.props.truth.todo}
          </span>

        </label>
        <div className="taskOptions">
          <i className="fa fa-pencil" onClick={ this.editTask.bind(this)}></i>
          <i className="fa fa-trash-o" onClick={ this.removeTask.bind(this)}></i>
        </div>
      </li>
    );
  }

  editTask(e){
    this.$task
      .attr('contenteditable', 'true')
      .focus()
      .css({
        'cursor': 'auto'
      })
      .parent()
      .css({
        'cursor': 'auto'
      });
  }

  endEditTask(){
    var taskValue;
    this.$task
      .removeAttr('contenteditable')
      .css({
        'cursor': 'pointer'
      })
      .parent()
      .css({
        'cursor': 'pointer'
      });
    taskValue = this.$task.text();
    if( taskValue == "" ){
      this.removeTask();
      return;
    }
    actions.handleUpdateTask( this, taskValue);
  }
  removeTask(){
    if( this.props.onRemove){
      this.props.onRemove(this);
    }
  }
  pressEnter(e){
    if( e.keyCode == 13){
      this.$task.blur();
    }
  }
  switchTask(){
    if(this.$task.attr('contenteditable')){
      return;
    }
    actions.handleSwitchTask(this);
  }
}

export default comp;
