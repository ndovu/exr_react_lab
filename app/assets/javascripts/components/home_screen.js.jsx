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

var ClickCount = React.createClass({
  getInitialState: function() {
    return { count: this.props.initialValue || 0 };
  },

  incrementClickCount: function() {
    this.setState({count: this.state.count + 1});
  },

  render: function() {
    return (
      <p onClick={this.incrementClickCount}>
          {this.props.title}: {this.state.count}
      </p>
    );
  },
});

var HomeScreen = React.createClass({
  getInitialState: function() {
    return { countTwo: 0 };
  },

  render: function() {
    return (
      <div>
        <Greeting />
        <p className="content">
          This is some text coming from a React component!
        </p>
        <ClickCount initialValue={1} title="click counter one"/>
        <ClickCount initialValue={2} title="click counter two"/>
        <ClickCount />
      </div>
    );
  },
});