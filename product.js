
import axios from "axios";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";


export default function Product() {
    const [data, setdata] = useState([]);
    var uri = 'http://localhost:1200/';
    var navi = useNavigate();



    var pid = new URLSearchParams(window.location.search).get('id');

    var PID = {
        prod: pid
    }

    axios.post(uri + 'uproduct', PID).then((succ) => {
        console.log(succ.data);
        setdata(succ.data);

    })
    function order(x) {
        navi('/Addcart?id='+x._id);
    }
    
    return (
        <div className="col-lg-10 col-lg-offset-1">
            <Navbar />
            {data.map((row) => (
                <div className="col-lg-12 mohit">
                    <div className="col-lg-6 mohit">
                        <div className="col-lg-12 mohit">
                            <img src={row.FImg} className="ordernow" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 prod">
                        <h1 style={{fontWeight:"bold"}}> {row.FName} </h1><br/>
                        <h2>Special Price For You</h2>
                        <span> Rs {row.Fprice}</span>&nbsp; &nbsp;  
                         <span><strike>Rs:{row.Fstrike}</strike> &nbsp; &nbsp;{row.Fpercent}%off</span>

                         <div className="">Rating  &nbsp; &nbsp;
                         <span className='glyphicon glyphicon-star gly2 mm'></span>
                            <span className='glyphicon glyphicon-star gly2 mm'></span>
                            <span className='glyphicon glyphicon-star gly2 mm'></span>
                            <span className='glyphicon glyphicon-star gly2'></span>
                         </div>

                        <h4  >CATEGORY : {row.FCat}</h4>    
                        <h3 style={{color:'red'}}>Avaliable offers</h3>
                        <p> <span className="glyphicon glyphicon-menu-right"></span>{row.Fbank}% instant discount on HDFC bank debit card upto 100 off </p>
                        <p> <span className="glyphicon glyphicon-menu-right"></span>60% off on your first order upto Rs 120</p>
                        <br></br>
                                              <button onClick={()=>order(row)} className="btn btn-primary">add to cart</button>
                        {/* <h4>dish:{row.Fdish}</h4> */}
                    </div>
                </div>
            ))}
        </div>
    )
}