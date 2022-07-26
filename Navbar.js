import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/'>Table Data</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/Events'>    Event Handlers</Link>
                </li>
            </ul>
        </header>
    )
}
export default NavBar;