import { Link } from 'react-router-dom'

export default function Navbar2() {
    return (
        <nav className='navbar navbar-default'>
            <div className='col-lg-11'>
                <div className='navbar-header'>
                    <div className='navbar-brand logo'>ZOMATO </div>
                </div>
                {/* <div className='navbar-brand'>zomato</div> */}
                <ul className='nav navbar-nav navbar-right'>
                    <li><Link to='/Admin'>Admin</Link></li>
                    {/* <li><Link to='/Home'>Home</Link></li> */}

                </ul>

            </div>
        </nav>
    )
}