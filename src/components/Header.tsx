import {Link} from 'react-router-dom'
import '../assets/styles/header.css'

export function Header() {
    return (
        <div className="candy-header">
            <h1 className="candy-heading">CANDY BLOG!</h1>
            <button className="candy-button candy-button--all">
                All Candys
            </button>
            <Link to="/users/register" className="candy-button candy-button--profile">
                Register
            </Link>
        </div>
    )
}

export default Header
