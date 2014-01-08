/**
 * Code in this file will be attached to the DOM of the page.
 */

var html = document.documentElement.innerHTML;
self.port.emit('refresh', html);
