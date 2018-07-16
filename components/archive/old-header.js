import Link from 'next/link'


class Header extends React.Component {

state = {
  menu: false
}

toggleMenu = (e) => {
  e.preventDefault();
  console.log('click!!')
  const menu = this.state.menu;
  this.setState({ menu: !menu })
  console.log(this.state.menu)
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
            
            <ul className={`navbar__menu ${this.state.menu ? "show" : ''}`}>
              <li>
                <Link href="/about">
                  <a className="nav-link">О нас</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="nav-link">Цены</a>
                </Link>
              </li>
            </ul>

          </nav>
        </header>
    )
  }
  

}
export default Header;