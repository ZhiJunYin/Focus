'use strict';

import Dispatcher from '../dispatcher/Dispatcher';

var ActionCreator ={
  handleAddTask(newTask){
    var action = {
      actionType: "ADD_TASK",
      newTask: newTask
    };
    Dispatcher.dispatch(action);
  }
};

export default ActionCreator;
