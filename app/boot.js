'use strict';

import './scss/app.scss';
import MainApp from './views/MainApp.jsx';

var _todoData = [
  { todo: "到洛聖都搶劫商店", done: false},
  { todo: "買超跑-獵豹", done: false}
];

$(function(){
  React.render( <MainApp truth={ _todoData} />, document.getElementById('app'));
});
