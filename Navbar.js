import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Navbar() {
    const [id, setid] = useState(false);
    var userid = localStorage.getItem('Useridlocal');

    function logout() {
        alert('logout');
        localStorage.removeItem('Useridlocal');
        setid(false);

    }

    useEffect(() => {
        if (userid) {
            setid(true)
        }
    }, [userid])


    return (
        <div className='navbar navbar-default'>
            <div className='container-fluid'>
                <div className='navbar-header'>
                    <div className='navbar-brand brand'>zomato</div>
                </div>


                <ul className='nav navbar-nav navbar-right'>
                    {id ? (
                        <li onClick={logout}><a href="">Logout</a></li>
                    ) : (
                        <>
                            <li><Link to='/SignUp'>SignUp</Link></li>
                            <li><Link to='/Login'>Login</Link></li>
                        </>
                    )
                    }
                </ul>
            </div>
        </div>   
    )
}