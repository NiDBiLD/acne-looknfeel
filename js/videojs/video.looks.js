/*
VIDEO LOOKS
*/



function examplePlugin(options) {
  this.on('play', function(e) {
  	alert('its my plugin');
    console.log('playback has started!');
  });
};


