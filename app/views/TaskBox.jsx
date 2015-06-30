'use strict';

import TaskList from './TaskList.jsx';

class comp extends React.Component {
  render(){
    var taskData = this.props.truth;
    var arrTask = taskData.map(function(data){
      return <TaskList truth={data} key={data.index} />
    }, this);
    return (
      <ul className="TaskBox">
        {arrTask}
      </ul>
    );
  }
}

export default comp;
