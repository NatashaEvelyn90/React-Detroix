import detroixLogo from '../../assets/logo.png'
import headerStyle from '../Header/Header.module.css'

function Header() {
  
  return (
    <div className= "d-flex flex-row justify-content-evenly align-items-center flexyFun">
      <div>
        <img src= {detroixLogo} className= "img-fluid bigSize col-9 mb-3" alt="" />
      </div>

      <div>
        <ul className= "nav">
          <li className="mx-1"><a className={` ${headerStyle.linkColor} text-decoration-none text-secondary px-3 p-2`} href="#">HOME</a></li>
          <li className="mx-1"><a className={` ${headerStyle.linkColor} text-decoration-none text-secondary px-2 p-2`} href="#">ABOUT</a></li>
          <li className="mx-1"><a className={` ${headerStyle.linkColor} text-decoration-none text-secondary px-2 p-2`} href="#">SERVICES</a></li>
          <li className="mx-1"><a className={` ${headerStyle.linkColor} text-decoration-none text-secondary px-2 p-2`} href="#">FAQS</a></li>
          <li className="mx-1"><a className={` ${headerStyle.linkColor} text-decoration-none text-secondary px-2 p-2`} href="#">CONTACTS</a></li>
        </ul>
      </div>
    </div>
  )
}



export default Header