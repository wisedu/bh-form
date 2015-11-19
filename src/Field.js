import React from "react";
import Input from "./Input";
import Label from "./Label";

var Field = React.createClass({
  // getInitialState:function(){
  //   return [];
  // },
  componentDidMount:function(){

  },
  render:function(){

    return (
      <div className="bh-form-group">
        <Label caption={this.props.model.caption}/>
        <div className="bh-control-entry ">
          <Input model={this.props.model}/>
        </div>
      </div>
    );
  }
});
module.exports = Field;
