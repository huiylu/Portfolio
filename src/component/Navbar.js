import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="nav-link-bar">
            
            <nav>
                <Link className="nav-link" to='/'>Home</Link>{' | '}
                <Link className="nav-link" to='/about'>About Me</Link>{' | '}
                <Link className="nav-link" to='./resume.pdf' target="_blank" download>Download Resume</Link>
            </nav>
            
        </div>
    )
}

export default Navbar;