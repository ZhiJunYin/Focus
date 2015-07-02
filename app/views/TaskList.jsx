'use strict';

var classSet = React.addons.classSet;

class comp extends React.Component {

  componentDidMount(){
    this.$task = $(React.findDOMNode(this)).find('.task');
  }

  render(){
    var InputClasses = classSet({
      'checked': this.props.truth.done
    });
    return(
      <li className="TaskList">
        <label>
          <input type="checkbox" defaultChecked={ InputClasses} />
          <span className="task">{this.props.truth.todo}</span>
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
