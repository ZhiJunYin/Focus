'use strict';

class comp extends React.Component {
  render(){
    return(
      <li className="TaskList">
        <label>
          <input type="checkbox"/>
          <span>我是待辦事項1</span>
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
