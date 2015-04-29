var HomeScreen = React.createClass({

  render: function() {
    var name = 'Noel';
    return (
      <div>
        <h1 className="title">Hello!</h1>
        <p className="content">
          This is some text from react!
          {1 + 1}
          {name}
        </p>
      </div>
    )
  }
});
