import Create from "./pages/Create.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Posts from "./posts/Posts.jsx";
import Post from "./posts/Post.jsx"
import Home from "./pages/Home.jsx"
import Footer from "./components/Footer.jsx"

import {
  BrowserRouter,
  Route, Routes} from "react-router-dom"
import Header from "./components/Header.jsx";


function App() {
  return (
    <BrowserRouter>  
      <header>
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Create" element={<Create />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
      );
}

export default App;
