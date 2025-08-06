import { Link } from "react-router-dom"
import Post from "./Post"
import "./posts.css"

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((post, index)=> (
        <Link to={`/posts/${post.id}`}>
        <Post key={index} post={post}/>
        </Link>
      ))}
    </div>
  )
}
