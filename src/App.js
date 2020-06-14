import React from 'react';
import PropTypes from 'prop-types';

function App() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 25},
    {name: "NoName", age: 3},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age}/>
        })
      }
    </div>
  )
}

function User(props) {
  return <div>Hi, I am {props.name} and {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}


export default App;
