import Dispatcher from '../dispatcher/Dispatcher.js';

var ActionCreator = {
  updateTask( item, value){
    Dispatcher.handleViewAction({
      item: item,
      value: value
    });
  }
};

export default ActionCreator;
