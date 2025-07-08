import detroixLogo from '../assets/logo.png'

function Header() {
  
  return (
    <div className="d-flex flex-row">
      <div>
        <img src= {detroixLogo} className="img-fluid col-9 mb-3" alt="" />
      </div>

      <div>
        <ul className= "nav">
          <li class="mx-1"><a class="text-decoration-none text-secondary linkColor px-3 p-2" href="#">HOME</a></li>
                    <li class="mx-1"><a class="text-decoration-none text-secondary linkColor px-3 p-2" href="#">ABOUT</a></li>
                    <li class="mx-1"><a class="text-decoration-none text-secondary linkColor px-3 p-2" href="#">SERVICES</a></li>
                    <li class="mx-1"><a class="text-decoration-none text-secondary linkColor px-3 p-2" href="#">FAQS</a></li>
                    <li class="mx-1"><a class="text-decoration-none text-secondary linkColor px-3 p-2" href="#">CONTACTS</a></li>
        </ul>
      </div>
    </div>
  )
}



export default Header