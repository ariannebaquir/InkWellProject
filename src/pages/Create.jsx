import "./Pages.css"

export default function Create() {
  return (
    <div className="create">
        <img
        className="createImg" 
        src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg" 
        alt="" />
      <form className="createPost">
        <div className="createPostGroup">
            <label htmlFor="file-input">
                <i classsName="createPostIcon fa-solid fa-image"></i>
            </label>
            <input type="file" id="file-input" style={{display:"none"}}/>
            <input type="text" id="title" className="create-input" autoFocus={true} placeholder="Title"/>
        </div>
        <div className="createPostGroup">
            <textarea placeholder="Share your thoughts.." type="text" className="create-input createText">
            </textarea>
        </div>
        <button className="createSubmit">Publish</button> 
      </form>
    </div>
  )
}
