var HomeScreen = React.createClass({
  getInitialState: function() {
    return { count: 0 };
  },

  incrementClickCount: function() {
    this.setState({count: this.state.count + 1});
  },

  render: function() {
    var name = 'Noel';
    return (
      <div>
        <h1 className="title">Hello!</h1>
        <p className="content">
          This is some text from react
        </p>
        <p onClick={this.incrementClickCount}>
          Click count: {this.state.count}
        </p>
      </div>
    )
  }
});
