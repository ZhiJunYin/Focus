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
  },
  handleSwitchTask(comp){
    var action = {
      actionType:"SWITCH_TASK",
      comp: comp
    }
    Dispatcher.dispatch(action);
  },
  handleRemoveTask(task){
    var action = {
      actionType: "REMOVE_TASK",
      task: task
    }
    Dispatcher.dispatch(action);
  }
};

export default ActionCreator;
