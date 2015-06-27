'use strict';

import './scss/app.scss';
import MainApp from './views/MainApp.jsx';

$(function(){
  React.render( <MainApp />, document.getElementById('app'));
});
