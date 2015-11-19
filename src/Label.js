import React from "react";

var Label = React.createClass({
  // getInitialState:function(){
  //   return [];
  // },
  componentDidMount:function(){

  },
  render:function(){
    return (<label className="bh-control-label">{this.props.caption}</label>);
  }
});

module.exports = Label;
