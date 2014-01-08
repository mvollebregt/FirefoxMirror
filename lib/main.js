// var widgets = require("sdk/widget");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("attachedcode.js")
});

// window.addEventListener('message', function(event) {
//   console.log(event.data);
//   console.log(event.origin);
// }, false);