import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar">
            <div className='navlinks'>
                <button style="-webkit-appearance:none;">
                    <Link to="/">Home</Link>
                </button>
                <button style="-webkit-appearance:none;">
                    <Link to="/portfolio">Portfolio</Link>
                </button>
                <button style="-webkit-appearance:none;">
                    <Link to="/contact">Contact</Link>
                </button>
                <button style="-webkit-appearance:none;">
                    <Link to="/resume">Resume</Link>
                </button>
            </div>
        </nav>
    );
};