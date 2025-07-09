import topStyle from '../TopBar/TopBar.module.css'

function TopBar() {
  return (
    <div className={`${topStyle.mainTop}`}>
      <ul className="nav justify-content-end pe-0">
        <li className="col-md-8 ms-5"><a className="text-decoration-none text-secondary" href="#">WWW.DEMOLINK.ORG |</a></li>
        <li className="col-md text-center"><a className="text-decoration-none text-secondary" href="#">SUPPORT |</a></li>
        <li className="col-md text-center"><a className="text-decoration-none text-secondary" href="#">FAQS |</a></li>
        <li className="col-md"><a className="text-decoration-none text-secondary" href="#">SITEMAP |</a></li>
        <li className="col-md"><a className="text-decoration-none text-secondary" href="#">HELP |</a></li>
      </ul>
    </div>     
  )
}

export default TopBar