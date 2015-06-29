'use strict';

class comp extends React.Component {
  render() {
    return (
      <div className="AddTaskBox">
        <div className="InputGroup">
          <input className="AddInput" type="text" />
          <label>今天想完成什麼事情呢？</label>
        </div>
        <button className="AddButton">
          <i className="fa fa-plus"></i>
          新增項目
        </button>
        <div className="clear"></div>
      </div>
    );
  }
}

export default comp;
