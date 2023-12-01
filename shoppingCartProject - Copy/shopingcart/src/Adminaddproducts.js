import { useState } from "react";
import Left from "./Left";

function Adminaddproducts() {
    const [name,setname]=useState()
    const [desc,setdesc]=useState()
    const [mdesc,setmdesc]=useState()
    const [price,setprice]=useState()
    const [qty,setqty]=useState()
    const [img,setimg]=useState()
    const [message,setmessage]=useState()

    function handleform(e){
        e.preventDefault()
        //console.log(name,desc,mdesc,price,qty)
        //console.log(img)
        let data= new FormData()
        data.append('name',name)
        data.append('desc',desc)
        data.append('mdesc',mdesc)
        data.append('price',price)
        data.append('qty',qty)
        data.append('img',img)

        fetch('/api/addproduct',{
            method:"POST",
            body:data
        }).then((response)=>{return response.json()}).then((data)=>{
            //console.log(data)
            if(data.status===201){
                setmessage(data.message)
            }else{
                setmessage(data.message)
            }
        })
    }
    return ( 
        <>
        <section id="mid">
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2>Add Product</h2>
                        <p>{message}</p>
                        <form onSubmit={(e)=>{handleform(e)}}>
                            <label>Product Name</label>
                            <input type="text" 
                            value={name}
                            onChange={(e)=>{setname(e.target.value)}}
                            className="form-control"/>
                            <label>Product Description</label>
                            <textarea 
                            value={desc}
                            onChange={(e)=>{setdesc(e.target.value)}}
                            className="form-control"></textarea>
                            <label>Product More Description</label>
                            <textarea 
                            value={mdesc}
                            onChange={(e)=>{setmdesc(e.target.value)}}
                            className="form-control"></textarea>
                            <label>Product Price</label>
                            <input type="number" 
                            value={price}
                            onChange={(e)=>{setprice(e.target.value)}}
                            className="form-control" />
                            <label>Product Quantity</label>
                            <input type="number" 
                            value={qty}
                            onChange={(e)=>{setqty(e.target.value)}}
                            className="form-control" />
                            <label>Product Image</label>
                            <input type="file" 
                            onChange={(e)=>{setimg(e.target.files[0])}}
                            className="form-control" />
                            <button type="submit" className="form-control btn btn-success mt-2 mb-2">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Adminaddproducts;