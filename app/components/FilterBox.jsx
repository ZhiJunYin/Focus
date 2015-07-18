'use strict';

import actions from '../actions/ActionCreator';

class comp extends React.Component {
  render() {
    return (
      <div className="filterBox">
        <div className="group">
          <input className="filterInput" type="text" placeholder="關鍵字搜尋"
            onChange={ this.searchTask}
            onBlur={ this.doneSearch} />
        </div>
      </div>
    );
  }
  searchTask(e){
    actions.handleSearchTask(e.target.value.trim());
  }
  doneSearch(){}
}

export default comp;
