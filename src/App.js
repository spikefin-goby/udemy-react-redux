import React from 'react';

function App() {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 25},
    {name: "NoName"},
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

User.defaultProps = {
  age: 1
}


export default App;
