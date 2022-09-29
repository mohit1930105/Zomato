
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./Firebase";

export default function Addpro() {
    var uri = 'http://localhost:1200/'

    function subform(e) {
        e.preventDefault();
        var data = new FormData(e.currentTarget);
        var FName = data.get("fname");
        var Fprice = Number(data.get("fprice"));
        var FCat = data.get("fcat");
        var FImg = data.get("fimg");
        var FDish = data.get("fdish");
        var Fstrike = data.get("strikeprice");
        var Fpercent = data.get("percentof");
        var Fbank = data.get("bankcash");

        var ref = db.ref();
        const metadata = {
            contentType: FImg.type
        }

        ref.child(FImg.name).put(FImg, metadata).then(snapshot => snapshot.ref.getDownloadURL()).then(url => {
            // console.log(url)
            var fdata = {
                FName: FName,
                Fprice: Fprice,
                FCat: FCat,
                FImg: url,
                Fdish:FDish,
                Fstrike:Fstrike,
                Fpercent:Fpercent,
                Fbank:Fbank
            }
            axios.post(uri + "addpro", fdata).then((succ) => {
                console.log(succ.data)
                if (succ.data == 'data added') {
                    alert("data addeds")
                }
            })
        })
    }

    const [data,setdata] = useState([]);
    function getdata(){
        axios.get(uri+"getpro").then((succ)=>{
            console.log(succ.data)
            setdata(succ.data)
        })
    }

    useEffect(()=>{
        getdata();
    },[])
    return (
        <>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                <form encType="multipart/form-data" onSubmit={subform}>
                    <div className="form-group">
                        <input name="fname" type={'text'} className="form-control" placeholder="enter food name" />
                    </div>
                    <div className="form-group">
                        <input name="fcat" type={'text'} className="form-control" placeholder="enter food category" />
                    </div>
                    <div className="form-group">
                        <input name="fprice" type={'number'} className="form-control" placeholder="enter food price" />
                    </div>
                    <div className="form-group">
                        <input name="fimg" type={'file'} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input name="strikeprice" type={'text'} className="form-control" placeholder="old price" />
                    </div>

                    <div className="form-group">
                        <input name="percentof" type={'text'} className="form-control" placeholder="%age discount" />
                    </div>
                    <div className="form-group">
                        <input name="bankcash" type={'text'} className="form-control" placeholder="bank cashback" />
                    </div>
                    
                    
                    
                    
                    
                    {/* <div className="form-group">
                        <select name="fdish" className="form-select form-control">
                            <option>Dishes</option>
                            <option value='pizza'>Pizza</option>
                            <option value='Burger'>Burger</option>
                            <option value='Wrap'>Wrap</option>
                            <option value='Fries'>fries</option>
                            <option value='sub'>sub</option>
                            <option value='samosa'>samosa</option>
                            <option value='Noodle'>Noodle</option>
                            <option value='manchurian'>manchurian</option>
                            <option value='chaap'>chaap</option>
                        </select>
                    </div> */}
                    <div className="form-group">
                        <input type={'submit'} className="btn btn-success" />
                    </div>
                </form>
            </div>

            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                {data.map((row)=>(
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <img src={row.FImg} height={250}/>
                        <h4>{row.FName}</h4>
                        <h4>{row.Fprice}</h4>
                        <h4>{row.FCat}</h4>
                    </div>
                ))}
            </div>
        </>
    )
}
