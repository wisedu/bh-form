var React = require("react");
var ReactDOM = require('react-dom');
var bhForm = require("../index.js");
var Form = bhForm.Form;

$.getJSON("./model.json", function(pageMate){
  var dataloader = new DataLoader("", pageMate);
  var model = dataloader.model("ssxsjbxxcx");

  ReactDOM.render(
      <Form models={model} cols="3" />
      , document.getElementById("app"));
});
