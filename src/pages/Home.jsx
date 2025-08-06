import Posts from '../posts/Posts'
import './Pages.css'
import  { useState, useEffect } from "react"

export default function Home() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
    fetch('https://dev.to/api/articles?tag=webdev&per_page=10')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.error('Error fetching posts:', err));
}, []);
  return (
    <div className='home'>
      <Posts posts={posts}/>
    </div>
  )
}
