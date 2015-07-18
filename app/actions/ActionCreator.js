'use strict';

import Dispatcher from '../dispatcher/Dispatcher';

var ActionCreator ={
  handleAddTask(newTask){
    Dispatcher.dispatch({
      actionType: "ADD_TASK",
      newTask: newTask
    });
  },
  handleUpdateTask( comp, value){
    Dispatcher.dispatch({
      actionType: "UPDATE_TASK",
      comp: comp,
      value: value
    });
  },
  handleSwitchTask(comp){
    Dispatcher.dispatch({
      actionType:"SWITCH_TASK",
      comp: comp
    });
  },
  handleRemoveTask(task){
    Dispatcher.dispatch({
      actionType: "REMOVE_TASK",
      task: task
    });
  }
};

export default ActionCreator;
