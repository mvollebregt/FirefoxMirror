// var widgets = require("sdk/widget");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("attachedcode.js"),
  onAttach: function(worker) {
      worker.port.on('refresh', refresh);
    }
});

function refresh(html) {
  console.log(html);
}

