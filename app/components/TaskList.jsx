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
          onClick = { this.handleDoneOrNot.bind(this)}
          onDoubleClick={ this.handleEdit.bind(this)}>

          <span className={ taskClasses}
                onBlur={ this.handleEndEdit.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}>
            { this.props.truth.todo}
          </span>

        </label>
        <div className="taskOptions">
          <i className="fa fa-pencil" onClick={ this.handleEdit.bind(this)}></i>
          <i className="fa fa-trash-o"></i>
        </div>
      </li>
    );
  }

  handleEdit(e){
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

  handleEndEdit(){
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
    actions.handleUpdateTask( this, taskValue);
  }

  handleKeyDown(e){
    if( e.keyCode == 13){
      this.$task.blur();
    }
  }

  handleDoneOrNot(){

  }
}

export default comp;
