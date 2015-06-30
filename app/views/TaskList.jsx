'use strict';

class comp extends React.Component {
  render(){
    return(
      <li className="TaskList">
        <label>
          <input type="checkbox"/>
          <span>{this.props.truth.todo}</span>
        </label>
        <div className="TaskOptions">
          <i className="fa fa-pencil"></i>
          <i className="fa fa-trash-o"></i>
        </div>
      </li>
    );
  }
}

export default comp;
