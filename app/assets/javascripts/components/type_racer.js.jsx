var CountdownTimer = React.createClass({
  render: function() {
    return <div />
  }
});

var RaceTrack = React.createClass({
  render: function() {
    return <div />
  }
});

var Passage = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.completed.join(' ')}
        <span> </span>
        <span className="active-word">{this.props.activeWord}</span>
        <span> </span>
        {this.props.remaining.join(' ')}
      </p>
    )
  }

});

var WordInput = React.createClass({
  _onChange: function() {
    this.props.onKeyEntry(this.refs.textInput.getDOMNode().value);
  },

  render: function() {
    var classes = "word-input";

    if (this.props.isCorrect) {
      classes = classes + " correct"
    } else {
      classes = classes + " incorrect"
    }

    return (
      <input type="text"
             ref="textInput"
             onChange={this._onChange}
             className={classes} />
    )
  }
});

var PASSAGE = "Advertising has these people chasing cars and clothes they don't need. Generations have been working in jobs they hate, just so they can buy what they don't really need."

var TypeRacer = React.createClass({
  getInitialState: function() {
    var passage = PASSAGE.split(' ');
    var activeWord = passage[0];
    var remaining = passage.slice(1, passage.length);

    return { completed: [],
             activeWord: activeWord,
             remaining: remaining,
             correct: true };
  },

  validateWord: function(wordSoFar) {
    var currentValidationIsCorrect = true;

    wordSoFar.split('').forEach(function(letter, index) {
      if (currentValidationIsCorrect == false) {
        return;
      }

      if (letter != this.state.activeWord[index]) {
        currentValidationIsCorrect = false;
        this.setState({correct: false});
      }
    }.bind(this));

    if (currentValidationIsCorrect) {
      this.setState({correct: true});
    }
  },

  render: function() {
    return (
      <div>
        <CountdownTimer />
        <RaceTrack />
        <Passage completed={this.state.completed}
                 activeWord={this.state.activeWord}
                 remaining={this.state.remaining} />
        <WordInput onKeyEntry={this.validateWord}
                   isCorrect={this.state.correct} />
      </div>
    )
  },

});