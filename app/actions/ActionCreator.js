'use strict';

import Dispatcher from '../dispatcher/Dispatcher';

var ActionCreator ={
  handleAddTask(newTask){
    var action = {
      actionType: "ADD_TASK",
      newTask: newTask
    };
    Dispatcher.dispatch(action);
  },
  handleUpdateTask( comp, value){
    var action = {
      actionType: "UPDATE_TASK",
      comp: comp,
      value: value
    }
    Dispatcher.dispatch(action);
  }
  hadleDeleteTask(){}
};

export default ActionCreator;
