import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


function Homepage() {
  return (
    <div className="home-page">
        <Navbar />
        <aside className="sidebar-links">
          <Sidebar />
        </aside>
        
        <Footer />
    </div>
  )
}

export default Homepage