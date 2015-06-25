'use strict';

import MainApp from './views/MainApp.jsx';
var App = React.createFactory( MainApp);

$(function(){
  React.render( App(), document.getElementById('app'));
});
