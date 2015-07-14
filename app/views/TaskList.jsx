'use strict';

import actions from '../actions/ActionCreator.js';

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
      <li className="TaskList">
        <label className="taskWrapper" onClick = { this.handleDoneOrNot.bind(this)}>
          <span className={ taskClasses}
                onDoubleClick={ this.handleEdit.bind(this)}
                onBlur={ this.handleEndEdit.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}>
            { this.props.truth.todo}
          </span>
        </label>
        <div className="TaskOptions">
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
    console.log('blur');
    this.$task
      .removeAttr('contenteditable')
      .css({
        'cursor': 'pointer'
      })
      .parent()
      .css({
        'cursor': 'pointer'
      });
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
