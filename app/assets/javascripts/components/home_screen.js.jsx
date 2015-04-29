var HomeScreen = React.createClass({

  render: function() {
    var name = 'Noel';
    return (
      <div>
        <h1 className="title">Hello!</h1>
        <p className="content">
          This is some text from react!
          { /* this is a comment */}
          { [1,2,3,4,5].join(' ') }
          {1 + 1}
          {name}
        </p>
      </div>
    )
  }
});
