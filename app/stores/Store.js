'use strict';

import Dispatcher from '../dispatcher/Dispatcher';
import events from 'events';

var _todoData = [
  { todo: "加購票券樣式調整", done: false},
  { todo: "輸入關鍵字，預設帶第一筆資料", done: false},
  { todo: "static map", done: true}
];

class Store extends events.EventEmitter {
  emitChange(){
    this.emit('change');
  }
  addChangeListener(callback){
    this.on( 'change', callback);
  }
  getAll(){
    return _todoData;
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
  }
});

export default store;
