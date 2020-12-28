import xapi from 'xapi';

function ListenToGui() {
  xapi.Event.UserInterface.Extensions.Widget.Action.on((event) => {
    if (event.WidgetId === 'DX') {
      if (event.Type === 'pressed') {
        xapi.command('Video Input SetMainVideoSource', {SourceId : [1]} );
        xapi.command('Video SelfView Set', {Mode : 'On'});
        xapi.command('Video SelfView Set', {FullScreenMode : 'Off'});
        }};
    if (event.WidgetId === 'Externe') {
      if (event.Type === 'pressed') {
       xapi.command('Video Input SetMainVideoSource', {SourceId : [2]} );
       xapi.command('Video SelfView Set', {Mode : 'On'});
       xapi.command('Video SelfView Set', {FullScreenMode : 'On'});
       }}; 
});
}

ListenToGui();
