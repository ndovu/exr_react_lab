var Greeting = React.createClass({
  getInitialState: function() {
    return { language: 'english' }
  },

  useSpanish: function() {
    this.setState({language: 'spanish'});
  },

  useEnglish: function() {
    this.setState({language: 'english'});
  },

  render: function() {
    if (this.state.language == 'english') {
      return (
        <h1 className="title">
          Hello! <a onClick={this.useSpanish}>(es)</a>
        </h1>
      )
    } else {
      return (
        <h1 className="title">
          Hola! <a onClick={this.useEnglish}>(en)</a>
        </h1>
      )
    }
  },
});

var HomeScreen = React.createClass({
  getInitialState: function() {
    return { countOne: 0, countTwo: 0 };
  },

  incrementClickCountOne: function() {
    this.setState({countOne: this.state.countOne + 1});
  },

  incrementClickCountTwo: function() {
    this.setState({countTwo: this.state.countTwo + 1});
  },

  render: function() {
    return (
      <div>
        <Greeting />
        <p className="content">
          This is some text coming from a React component!
        </p>
        <p onClick={this.incrementClickCountOne}>
          Click count one: {this.state.countOne}
        </p>

        <p onClick={this.incrementClickCountTwo}>
          Click count two: {this.state.countTwo}
        </p>
      </div>
    );
  }

});



var HomeScreen = React.createClass({
  
  getInitialState: function() {
    return { countOne: 0, countTwo: 0,};
  },

  incrementClickCountOne: function() {
    this.setState({countOne: this.state.countOne + 1});
  },

  incrementClickCountTwo: function() {
    this.setState({countTwo: this.state.countTwo + 1});
  },

  render: function() {
    var name = 'Noel';
    return (
      <div>
        <Greeting />
        <p className="content">
          This is some text from react
        </p>
        <p onClick={this.incrementClickCountOne}>
          Click count one: {this.state.countOne}
        </p>
        <p onClick={this.incrementClickCountTwo}>
          Click count two: {this.state.countTwo}
        </p>
      </div>
    )
  },
});
