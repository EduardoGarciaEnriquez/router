//Container component
//snippet code: rce
import React, { Component } from 'react' 
//import axios from 'axios';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postsActions';

export class Post extends Component {
    // state = {
    //     post : null
    // }
    
    //identify the route parameter inside this component so we know what data to fetch(que data obtener)
    //in the didMountComponent hook, once we fetch the data we ara going to try to find out the route parameter inside the component and then we can fetch data.
    // componentDidMount(){
    //     //we have all the extra info atatched to our route props
    //     //to check: homepage > inspect > react components > Router.Provider
    //     //console.log(this.props);
    //     let id = this.props.match.params.post_id ;

    //     //import dumb posts, but only the one with the same id that we got above
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //         .then(res => {
    //             this.setState({
    //                 post : res.data
    //             })
    //             console.log(res);
    //         })
        //when component did mount fires we set state id to the value of the url that we are grabing above
        // this.setState({
        //     id : id
        // })
    //} 
    
    handleClick=()=>{
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center"><button className="btn grey" onClick={this.handleClick}>Delete post</button></div>
            </div>
        ) : (
            <div className="center">Loading post...</div>
        );

        return (
            <div className="container">
                { post }
            </div>
        )
    }
} 

const mapStateToProps = (state, ownProps) =>{
    let id = ownProps.match.params.post_id;
    return {
      post: state.posts.find(post => post.id === id)
    }
  }

const mapDispatchToProps =( dispatch) => {
    return{
        deletePost : (id) => {dispatch(deletePost(id ))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);