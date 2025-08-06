import Home from "../pages/Home"
import "./components.css"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="site-wrapper">
            <Header />
            <main>
            <Home />
            </main>
            <Footer />
        </div>
  )
}
