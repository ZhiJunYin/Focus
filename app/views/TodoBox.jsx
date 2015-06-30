'use strict';

import TaskBox from './TaskBox.jsx';
import AddTaskBox from './AddTaskBox.jsx';
import FilterBox from './FilterBox.jsx';

class comp extends React.Component {
  render() {
    return (
      <div className="TodoBox">
        <FilterBox />
        <TaskBox truth={ this.props.truth} />
        <AddTaskBox />
      </div>
    );
  }
}

export default comp;
