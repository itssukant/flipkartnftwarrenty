import '../styles/globals.css'
import Link from 'next/link'
import './../main.css'

function Marketplace({ Component, pageProps }) {
  return (
    <div className="navbody">
    <nav className="navmain">
      <div className="navbodyflex">
      
      <div className="navtitle">
    
         <p className="navmaintext">ThingKart</p>
    
        </div>
        
        <div className="navop">
        
          <Link href="/">
            <a className="navoption">
              Home
            </a>
          </Link>
          <Link href="/create-item">
          <a className="navoption" >Sell Your Product</a>
          </Link>
          <Link href="/my-assets">
            <a className="navoption">
              My Products
            </a>
          </Link>
          <Link href="/my-profile">
            <a className="navoption">
              My Profile
            </a>
          </Link>
          <Link href="/logout">
            <a className="navoption">
              Log out
            </a>
          </Link>
        </div>
        </div>
       
      </nav>
      <Component {...pageProps}/>
    </div>
  )
}

export default Marketplace