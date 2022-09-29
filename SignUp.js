import Navbar from "./Navbar";
// import img1 from './Image/img1.jpg'
import { Link } from "react-router-dom";
import axios from "axios";




export default function SignUp() {
    var uri = 'http://localhost:1200/'


    function handleform(e) {

        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var name = data.get('name')
        var email = data.get('email')
        var password = data.get('password')
        var contact = data.get('contact')


        // console.log('name')
        // console.log('email')
        // console.log('password')
        // console.log('contact')


        var obj = {
            Name: name,
            Email: email,
            Password: password,
            Contact: contact
        }
        axios.post(uri + 'uregist',obj).then((succ) => {
            console.log(succ.data);
            var ar = succ.data;

            if (ar != "") {
                if (ar.Email == obj.Email) {
                    alert('ID Alreeady Registered');
                } else {
                    axios.post(uri + 'uregister', obj).then((succ) => {
                        console.log(succ.data);
                        if (succ.data == 'hogya') {
                            alert('ID Registered');
                        }
                    })
                }
            } else {
                axios.post(uri + 'uregister', obj).then((succ) => {
                    console.log(succ.data);
                    if (succ.data == 'hogya') {
                        alert('ID Registered');
                    }
                })

            }
        })



    }



    return (
        <div className="col-lg-12 col-lg-offset-0 col-xs-12 col-xs-offset-0 signup">
            <div className="col-lg-4 col-lg-offset-4 col-xs-4 col-xs-offset-4  col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 right-side">
                <h1 >SignUp</h1>
                <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                    <form onSubmit={handleform}>
                        <div className="form-group">
                            <input type={'text'} name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type={'email'} name='email' className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type={'password'} name='password' className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type={'tel'} name='contact' className="form-control" placeholder="Contact no." />
                        </div>
                        <div className="form-group">
                            <input type={'submit'} className="btn btn-primary " />
                        </div>
                        <p>Already Have an Account? <Link to='/Login'>Login</Link></p>
                    </form>
                </div>
            </div>

        </div>
    )
}