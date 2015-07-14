import flux from 'flux';

class Dispatcher extends flux.Dispatcher {};

$.extend( Dispatcher, {
  handleViewAction( action){
    console.log( action);
  }
});

export default Dispatcher;
