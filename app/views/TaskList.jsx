'use strict';

class comp extends React.Component {
  render(){
    return(
      <li className="TaskList">
        <label>
          <input type="checkbox"/>
          <span>我是待辦事項1</span>
        </label>
      </li>
    );
  }
}

export default comp;
