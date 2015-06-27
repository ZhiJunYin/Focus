'use strict';

class comp extends React.Component {
  render() {
    console.log( this.props.count);
    return (
      <div className="TodoBox">
        <h3>Hi, Im TodoBox!</h3>
      </div>
    );
  }
}

export default comp;
