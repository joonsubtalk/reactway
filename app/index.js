var user_data = {
    name: 'joon chun',
    username: 'joonsubtalk',
    image: 'https://avatars1.githubusercontent.com/u/1153796?v=3&s=460'
    
}
var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
    render: function(){
        return (
            <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
        )
    }
});

var ProfileLink = React.createClass({
    render: function(){
        return (
            <div>
                <a href={'http://www.github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
});

var ProfileName = React.createClass({
    render: function(){
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
});

var Avatar = React.createClass({
   render: function(){
       return (
        <div>
            <ProfilePic imageUrl={this.props.user.image} />
            <ProfileName name={this.props.user.name} />
            <ProfileLink username={this.props.user.username} />
        </div>
       )
   } 
});

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello {this.props.name}!
      </div>
    )
  }
});

ReactDOM.render(
    <Avatar user={user_data}/>, document.getElementById('app')
);

