
import Navbar3 from "./Navbar3";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Orderonline() {

    var uri = 'http://localhost:1200/';
    var navi = useNavigate();

    const [data, setdata] = useState([]);

    function getdata() {
        axios.post(uri + 'addpro2').then((succ) => {
            console.log(succ.data);
            setdata(succ.data);

        })


    }

    function order(x) {
        navi('/Product?id=' + x._id);

    }
    useEffect(() => {
        getdata()
    }, [])


    return (
        <div className="col-lg-10 col-lg-offset-1">
            <Navbar3 />
            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12"><div className="btn btn-light filter">Filter</div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="btn btn-light filter">Delivery Time
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="btn btn-light filter">Rating 4.0+</div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="btn btn-light filter">Pure Veg</div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="btn btn-light filter">Cusines</div>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>



            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                <div><h1 style={{ justifyContent: 'center', letterSpacing: '1px' }}>Delivery Restraunts in Guru Nanak Pura, New kundanpuri,Civil Lines </h1></div>
                {data.map((row) => (
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{ height: 370, border: '2px solid grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>


                        <img src={row.FImg} height={190} />

                        <h4>name : {row.FName}</h4>
                        <h4>price : {row.Fprice}</h4>
                        <h4>category : {row.FCat}</h4><br />
                        {/* <h4>dish:{row.Fdish}</h4> */}
                        <button onClick={() => order(row)} className="btn btn-success">order now</button>
                    </div>
                ))}
            </div>

        </div>
    )

}