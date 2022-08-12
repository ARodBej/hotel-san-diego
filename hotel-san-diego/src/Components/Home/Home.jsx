import "./Home.css"
import Music from "../Music/Music"

function Home() {
    return (
      <>
      {/* hero section */}
      <div className="home-container">
          <div className="content-left">
            <h3>welcome to</h3>
            <h1>Hotel California</h1>
            <p>Check out my music, it's cool<br/>and maybe I'll be famous some day</p>
            <div className="btn-container">
              <button className="btn btn-hero">Listen</button>
              <button className="btn outline btn-hero">Order Album</button>
            </div>
          </div>
          <div className="content-right">
            <img src="https://source.unsplash.com/Fr2iwKpsi-Y" alt="" />
          </div>
      </div>
      {/* CTA Music Cards */}
      <Music/>
      </>
    );
  }
  
  export default Home;