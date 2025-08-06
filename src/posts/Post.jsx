import "./posts.css"


export default function Post({post}) {
    const postDate = new Date(post.created_at);
    const formattedDateTime = postDate.toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    hour12: true});

  return (
    <div className="post">
        <img
        className="postImg"
        src={post.social_image}
        alt=""
        />
        <div className="postInfo">
            <div className="postTags">
                <span className="postTags">{post.tags}</span>
            </div>
            <span className="postTitle">
                {post.title}
            </span>
            <span className="postDate">
                {formattedDateTime}
            </span>
            <span className="author">
                {post.user.name}
            </span>
        </div>
        <p className="postDesc">
            {post.description}
        </p>
    </div>
  )
}
