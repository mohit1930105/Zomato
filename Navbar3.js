import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function Navbar3() {
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
                <form class="form-inline">
    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

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
  </form>
            </div>
        </div>   
    )
}