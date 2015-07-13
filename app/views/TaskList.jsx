'use strict';

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
        <label>
          <span className={ taskClasses}>
            { this.props.truth.todo}
          </span>
        </label>
        <div className="TaskOptions">
          <i className="fa fa-pencil" onClick={this.handleClick.bind(this)}></i>
          <i className="fa fa-trash-o"></i>
        </div>
      </li>
    );
  }
  handleClick(){
    this.$task.attr('contenteditable', 'true').focus();
    this.$task.on( 'focusout', function(e){
      e.preventDefault();
      $(this).removeAttr('contenteditable');
    });
  }
}

export default comp;
