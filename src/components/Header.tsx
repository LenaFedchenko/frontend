
import '../assets/styles/header.css'

export function Header() {
    return (
        <div className="candy-header">
            <h1 className="candy-heading">CANDY BLOG!</h1>
            <button className="candy-button candy-button--all">
                All Candys
            </button>
            <button className="candy-button candy-button--profile">
                Profile
            </button>
        </div>
    )
}

export default Header
