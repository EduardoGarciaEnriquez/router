//Container component
import React, { Component } from 'react';
//import axios from 'axios';
import {Link} from 'react-router-dom';
import ninja from '../img/ninja.png';
import {connect} from 'react-redux';

class Home extends Component {
  // state = {
  //   posts : []
  // }
  // componentDidMount(){
  //   //this is asyncronous and will return a promisse, meaning that this will acomplish at some point in time
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   //.then method fires when the promisse is completed, so we will run .then only when axios.get has completed loaded
  //   .then(res =>{  //res = response function
  //     //console.log(res); //console log response
  //     this.setState({ //update state
  //       posts : res.data.slice(0,10) //response > data array > take only the first 10
  //     })
  //   });
  // }
  
  render() {
    console.log(this.props);
    //get the posts property from state and save it into a const 
    const {posts} = this.props;

    //check if the post promisse already updated response, so posts.length == true to cycle the array
    //saving each post element in the postList array
    const postList = posts.length ? (
      posts.map( post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
            <img src={ninja} alt="MXflag"/>
              <Link className="red-text" to={'/'+post.id}>
                <span className="card-title">{post.title}</span>
              </Link>             
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts yet</div>
    )
    return (
      <div>
        <div className="container home">
          <h4 className="center">Home page</h4>
          {postList}
        </div>
      </div>
    )
  }
}

//we got rid of this in order to wrap this component and use axios
// const Home = () =>{
//   return(
//     <div className="container">
//       <h4 className="center">Home page</h4>
//       <p className="blue-text">Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla Lorem ipsum bla bla bla </p>
//     </div>
//   )
// }

const mapStateToProps = (state) =>{
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps)(Home);