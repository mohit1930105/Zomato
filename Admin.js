import Navbar2 from "./Navbar2";
import { Link } from "react-router-dom";
import axios from "axios";



export default function Admin() {
    var uri = 'http://localhost:1200/'

    function handle(e) {

        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var email = data.get('email')
        var password = data.get('password')

        var objj = {
            Email: email,
            Password: password
        }
        console.log(objj)
        axios.post(uri+ 'ulogin',objj ).then((succ)=>{
            console.log(succ.data);
            if (succ.data =='loginhogya') {
                alert('login successfull')
            }
        })
        
    }
    return (<>

        <Navbar2/>
        <div className="col-lg-12 col-xs-12 col-md-12 col-sm-12 log ">
            <div className="col-lg-4 col-lg-offset-4 log-inside ">
                <h1>admin </h1>
                <div className="col-lg-10 col-lg-offset-1">
                    <form onSubmit={handle}>

                        <div className="form-group">
                            <input type={'text'} name='email' className="form-control" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <input type={'password'} name='password' className="form-control" placeholder="password" />
                        </div>
                        <div className="form-group">
                            <input type={'submit'} className='btn btn-primary lg-btn'>

                            </input>
                        </div>
                        <p>New To Zomato?  <Link to='/SignUp'>SignUp</Link></p>
                    </form>

                </div>
            </div>

        </div>
    </>
    )
}


