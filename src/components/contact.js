//UI component
import React from 'react';

const Contact = (props) =>{
  //redirect to home page after 2s (2000ms)
  setTimeout(()=>{
    props.history.push('/')
  },2000)
  return(
    <div className="container">
      <h4 className="center">Contact page</h4>
      <p className="red-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus itaque dicta, mollitia quibusdam fuga commodi. Dolor quam quisquam distinctio repellat. Cumque, ipsa numquam nulla totam illo repellendus odio corrupti asperiores.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ex, quos, ipsa dolore laboriosam suscipit expedita quas mollitia nisi modi obcaecati reprehenderit ducimus quis odio sit consequatur, dolor in! Nostrum?</p>
    </div>
  )
}

export default Contact;