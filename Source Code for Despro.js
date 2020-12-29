import xapi from 'xapi';

function ListenToGui() {
  xapi.Event.UserInterface.Extensions.Widget.Action.on((event) => {
    if (event.WidgetId === 'DX') {
      if (event.Type === 'released') {                                     //This is a button action change vs DX code
        xapi.command('Video Input SetMainVideoSource', {SourceId : [1]} );
        xapi.command('Video SelfView Set', {Mode : 'On'});
        xapi.command('Video SelfView Set', {FullScreenMode : 'Off'});
        }};
    if (event.WidgetId === 'Externe') {
      if (event.Type === 'released') {                                     //This is a button action change vs DX code
       xapi.command('Video Input SetMainVideoSource', {SourceId : [3]} );  //this is an ID change vs DX code
       xapi.command('Video SelfView Set', {Mode : 'On'});
       xapi.command('Video SelfView Set', {FullScreenMode : 'On'});
       }}; 
});
}

ListenToGui();
