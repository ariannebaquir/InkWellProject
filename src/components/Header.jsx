import "./components.css"

export default function Header() {
  return (
    <div className='header'>
      <div className="site-name"><i className="fa-duotone fa-solid fa-pen-ruler"></i> InkWell</div>
      <div className="center"><i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Search.."></input>
      </div>
      <div className="username">
        <img 
          className="userimg"
          src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
          alt=""
        />
      </div>
    </div>
  )
}
