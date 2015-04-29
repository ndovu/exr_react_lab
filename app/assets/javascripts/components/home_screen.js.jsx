var HomeScreen = React.createClass({

  render: function() {
    return (
      <div>
        <h1 className="title">Hello!</h1>
        <p className="content">
          This is some text from react!
          {1 + 1}
        </p>
      </div>
    )
  }
});
