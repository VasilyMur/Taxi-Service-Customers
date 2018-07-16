import Link from 'next/link'
import Phone from 'react-svg-loader!../images/phone.svg';

class Header extends React.Component {



scrollPrices = (e) => {
  e.preventDefault();



 console.log("PUSH")


}

  render () {
    return (
      <header className="header">
          <nav className="navbar">

            <div className="navbar__logo">
              <Link href="/">
                <a className="nav-link">SafeDrive</a>
              </Link>
            </div>
            
            <ul className='navbar__menu'>
              <li>
                <Link href="/about">
                  <a className="nav-link callButton">
                    <Phone width={30} height={30}/>
                  </a>
                </Link>
              </li>

              <li>
      
                  <a onClick={this.scrollPrices} className="nav-link">Цены</a>
      
              </li>
            </ul>

          </nav>
        </header>
    )
  }
  

}
export default Header;