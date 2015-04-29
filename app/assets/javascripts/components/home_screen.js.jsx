var HomeScreen = React.createClass({
  getInitialState: function() {
    return {
      nameSubmitted: false,
      name: ''
    }
  },

  submitName: function(e) {
    e.preventDefault();
    this.setState({nameSubmitted: true});
  },

  updateName: function() {
    this.setState({name: this.refs.nameInput.getDOMNode().value});
  },

  render: function() {
    if (this.state.nameSubmitted) {
      return (
        <div>
          <h1>Hello {this.state.name}!</h1>
          <button onClick={this.reset}>OK!</button>
        </div>
      )
    } else {
      return (
        <form onSubmit={this.submitName}>
          <input type="text" ref="nameInput"
                 placeholder="What is your name?"
                 onChange={this.updateName} />
          <input type="submit" />
        </form>
      )
    }
  },
});