import { Link, NavLink } from 'react-router-dom'
import './Herder.css'
const Herder = () => {

    return (
        <ul>
            <li><NavLink  to="/">Home</NavLink></li>
            <li><NavLink  to="/users">Users </NavLink></li>
            <li><NavLink  to="/Books">Books</NavLink></li>
        </ul>
    )
}
export default Herder