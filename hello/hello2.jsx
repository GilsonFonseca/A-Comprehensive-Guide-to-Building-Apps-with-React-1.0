var HelloWorld = React.createClass({
  displayName: "HelloMessage",
    render: function() {
      return React.createElement("div", null, "Hello World");
    }
  }
);
 
ReactDOM.render(<HelloWorld />, document.getElementById('app2'));