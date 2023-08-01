import "./App.css";
import {useState} from 'react'
import Post from './Components/Post'
function App() {
  const[posts,setPosts] = useState([])

  let postsDisplay = async() => {
    try{
      let res = await fetch('https://jsonplaceholder.typicode.com/posts')
      let data = await res.json();
      setPosts(data)
      console.log(data)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn" onClick={postsDisplay}>GET POSTS</button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {posts.map((post) => (
          <Post key = {post.id} props = {post}/>
        ))}
      </div>
    </div>
  );
}

export default App;
