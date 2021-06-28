import React from 'react';

const Contact = (props) =>{
  //redirect to home page after 2s (2000ms)
  setTimeout(()=>{
    props.history.push('/home.js')
  },2000)
  return(
    <div className="container">
      <h4 className="center">Contact page</h4>
      <p className="cyan-text">Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla </p>
    </div>
  )
}

export default Contact;