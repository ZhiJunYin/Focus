'use strict';

import Dispatcher from '../dispatcher/Dispatcher';
import events from 'events';

var _todoData = [
  { todo: "加購票券樣式調整", done: false},
  { todo: "輸入關鍵字，預設帶第一筆資料", done: false},
  { todo: "static map", done: true}
];
var filter = "";

class Store extends events.EventEmitter {
  emitChange(){
    this.emit('change');
  }
  addChangeListener(callback){
    this.on( 'change', callback);
  }
  getAll(){
    return {
      data: _todoData,
      filter: filter
    };
  }
};

var store = new Store();

Dispatcher.register(function(action){
  switch (action.actionType) {
    case "ADD_TASK":
      _todoData.push({
        todo: action.newTask,
        done: false
      });
      store.emitChange();
      break;

    case "UPDATE_TASK":
      action.comp.props.truth.todo = action.value;
      store.emitChange();
      break;

    case "REMOVE_TASK":
      _todoData = _todoData.filter(function(data){
        return data.todo != action.task;
      });
      store.emitChange();
      break;

    case "SWITCH_TASK":
      action.comp.props.truth.done = !action.comp.props.truth.done;
      store.emitChange();
      break;

    case "SEARCH_TASK":
      if( filter !== action.value){
        filter = action.value;
        store.emitChange();
      }
  }
});

export default store;
