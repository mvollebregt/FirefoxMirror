// var widgets = require("sdk/widget");
var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

tabs.on('ready', function(tab) {
  tab.attach({
	  contentScriptFile: data.url("attachedcode.js")
  });
});