import { Link, NavLink, useNavigate } from 'react-router-dom';

const NavLinks = [
    { id: 1, name: 'Marvel', to: 'marvel' },
    { id: 2, name: 'DC', to: 'dc' },
    { id: 3, name: 'Search', to: 'search' },
]

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true,
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {
                        NavLinks.map(link => (
                            <NavLink
                                key={link.id}
                                className="nav-item nav-link"
                                to={link.to}
                            >
                                {link.name}
                            </NavLink>

                        ))
                    }
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Joel
                    </span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}