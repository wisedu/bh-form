import React from "react";
import Field from "./Field.js";

var Form = React.createClass({
  // getInitialState:function(){
  //   return [];
  // },
  componentDidMount:function(){

  },
  render:function(){
    var items = this.props.models.map(function(item, index){
      return (<Field key={item.name} model={item}></Field>);
    })
    return (
      <form>
        {items}
        <div className="clearfix bh-clearfix"></div>
      </form>);
  }
});

module.exports = Form;
