import React from 'react'
import Posts from './components/Posts'


function App (){
  const firstName = 'sammy';
  const lastName = 'koki';

  const person = () => {
   return firstName + ' ' + lastName
   
  }
  return (
   <div className='App'>
    <h1>{person()}</h1>
    <Posts />
  </div> 

  );
}



export default App;




