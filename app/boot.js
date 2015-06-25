'use strict';

import MainApp from './views/MainApp.jsx';
var App = React.createFactory( MainApp);
// var MainApp = React.createFactory(require('./MainApp.jsx'));

$(function(){
  React.render( App(), document.getElementById('app'));
});
