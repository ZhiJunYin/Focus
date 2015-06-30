'use strict';

class comp extends React.Component {
  render() {
    return (
      <div className="FilterBox">
        <div className="group">
          <input  className="FilterInput" type="text" placeholder="關鍵字搜尋" />
        </div>
      </div>
    );
  }
}

export default comp;
