'use strict';

import './scss/app.scss';
import MainApp from './components/MainApp.jsx';

$(function(){
  React.render( <MainApp />, document.getElementById('app'));
});
