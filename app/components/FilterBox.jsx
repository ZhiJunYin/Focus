'use strict';

class comp extends React.Component {
  render() {
    return (
      <div className="filterBox">
        <div className="group">
          <input className="filterInput" type="text" placeholder="關鍵字搜尋" />
        </div>
      </div>
    );
  }
}

export default comp;
