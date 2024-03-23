import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar">
            <div className='navlinks'>
                <p>
                    <Link to="/">Home</Link>
                </p>
                <p>
                    <Link to="/portfolio">Portfolio</Link>
                </p>
                <p>
                    <Link to="/contact">Contact</Link>
                </p>
                <p>
                    <Link to="/resume">Resume</Link>
                </p>
            </div>
        </nav>
    );
};