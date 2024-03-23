import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar">
            <div className='navlinks'>
                <button>
                    <Link to="/">Home</Link>
                </button>
                <button>
                    <Link to="/portfolio">Portfolio</Link>
                </button>
                <button>
                    <Link to="/contact">Contact</Link>
                </button>
                <button>
                    <Link to="/resume">Resume</Link>
                </button>
            </div>
        </nav>
    );
};