var HomeScreen = React.createClass({
  getInitialState: function() {
    return {
      boxStyle: {width: 200, height: 200, backgroundColor: 'red'}
    }
  },

  increaseWidth: function() {
    var style = this.state.boxStyle;
    style.width = style.width + 10;
    this.setState({boxStyle: style});
  },

  increaseHeight: function() {
    var style = this.state.boxStyle;
    style.height = style.height + 10;
    this.setState({boxStyle: style});
  },

  setRed: function() {
    var style = this.state.boxStyle;
    style.backgroundColor = 'red';
    this.setState({boxStyle: style});
  },

  setGreen: function() {
    var style = this.state.boxStyle;
    style.backgroundColor = 'green';
    this.setState({boxStyle: style});
  },

  render: function() {
    return (
      <div>
        <div style={this.state.boxStyle} />
        <div style={{position: 'absolute', top: 0, left: 0}}>
          <button onClick={this.increaseWidth}>Increase width</button>
          <button onClick={this.increaseHeight}>Increase height</button>
          <button onClick={this.setRed}>Red</button>
          <button onClick={this.setGreen}>Green</button>
        </div>
      </div>
    )
  },
});