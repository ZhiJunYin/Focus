'use strict';

import Dispatcher from '../dispatcher/Dispatcher';
import events from 'events';

var _todoData = [];

class Store extends events.EventEmitter {
  constructor(){
    super();
  }
};
