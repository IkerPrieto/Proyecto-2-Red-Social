import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/authSlice";
// import "../assets/styles/layout/_theHeader.scss";

const TheHeader = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const onLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
        navigate('/login')
    }
    return (
        <nav>
            <h1>header</h1>
            {user ? (<button onClick={onLogout}>Logout</button>) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}
        </nav>
    )
}

export default TheHeader