// var widgets = require("sdk/widget");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var request = require("sdk/request").Request;

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("attachedcode.js"),
  onAttach: function(worker) {
      worker.port.on('refresh', refresh);
    }
});

function refresh(html) {
  console.log("trying to post html");
  request({
    url: "http://localhost:8080",
    content: html
  }).put();
}

