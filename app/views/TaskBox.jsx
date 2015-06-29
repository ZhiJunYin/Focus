'use strict';

import TaskList from './TaskList.jsx';

class comp extends React.Component {
  render(){
    return (
      <ul className="TaskBox">
        <TaskList />
      </ul>
    );
  }
}

export default comp;
