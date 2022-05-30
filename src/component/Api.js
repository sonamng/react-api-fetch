import React,{Component} from "react";
import axios from 'axios'
class PostLister extends Component{
    constructor(props){
        super(props);
        this.state={
            post:[],
            error:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            this.setState({post:res.data})
        })
        .catch(error=>{
            console.log(error);
            this.setState({errorMsg:"Error retreiving......"})
        })
    }
    render(){
        const {post,errorMsg}=this.state
        return(
            <div> 
                {post.length ?
                    post.map(posts=>  <div key={posts.id}>{posts.title}</div>):null
                }
                {
                    errorMsg?<div>{errorMsg}</div>:null
                }
            </div>
        )
    }
}
export default PostLister;
