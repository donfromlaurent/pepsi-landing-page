import logo from './assets/logo.png';

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="pepsi logo" />
        </div>
        <div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar;