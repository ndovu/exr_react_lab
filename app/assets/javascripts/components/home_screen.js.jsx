function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

var Greeting = React.createClass({
  getDefaultProps: function() {
    return { name: 'stranger' };
  },

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
        <div className="greeting">
          <h1 className="title">
            Hello {reverse(this.props.name)}! <a onClick={this.useSpanish}>(es)</a>
          </h1>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div className="greeting">
          <h1 className="title">
            Hola {reverse(this.props.name)}ito! <a onClick={this.useEnglish}>(en)</a>
          </h1>
          {this.props.name}
        </div>
      )
    }
  },

});

var ClickCounter = React.createClass({
  getDefaultProps: function() {
    return { initialValue: 0, title: 'Click counter' }
  },

  getInitialState: function() {
    return { count: this.props.initialValue };
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
    return { };
  },

  render: function() {
    return (
      <div>
        <Greeting name="Brent">
          <p>This is from inside of the greeting!</p>
          <p>More stuff!</p>
          <p>More stuff!</p>
        </Greeting>

        <p className="content">
          This is some text coming from a React component!
        </p>

        <ClickCounter initialValue={1} title="Click counter one" />
        <ClickCounter initialValue={2} title="Click counter two" />
        <ClickCounter />
      </div>
    );
  }

});
