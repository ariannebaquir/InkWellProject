import "./Pages.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
        src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg"
        alt=""
        className="singlePostImage"/>
        <h1 className="singlePostTitle">
          Title title
          <div className="singlePostEdit">
           <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
           <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:<b> Author</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor, facilis voluptates, voluptatum cumque rerum numquam placeat impedit, doloremque illum quaerat. Laudantium iusto debitis facilis asperiores ab. Expedita, qui voluptate.</p>
      </div>
    </div>
  )
}
