import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div>
                    <ul className='navlinks'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Me</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};