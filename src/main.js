const isDesktop = process.env.NODE_ENV === 'desktop';

let ipcRenderer = false;

if (isDesktop) {
  ipcRenderer = require('electron').ipcRenderer;
}

if (ipcRenderer) {
  // send to main process
  ipcRenderer.sendSync('synchronous-message', 'this is the content of my electron message');
} else {
  alert('Not available in the \'web\' environment');
}
