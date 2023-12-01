import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Left from "./Left";

function Adminproductupdate() {
    const {id}=useParams()
    const [name,setname]=useState()
    const [desc,setdesc]=useState()
    const [mdesc,setmdesc]=useState()
    const [price,setprice]=useState()
    const [qty,setqty]=useState()
    const [img,setimg]=useState()
    const [status,setstatus]=useState()
    const [message,setmessage]=useState()
    useEffect(()=>{
        fetch(`/api/singledata/${id}`).then((response)=>{return response.json()}).then((data)=>{
            if(data.status===200){
                setname(data.apiData.name)
                setdesc(data.apiData.desc)
                setmdesc(data.apiData.mdesc)
                setprice(data.apiData.price)
                setqty(data.apiData.quantity)
                setname(data.apiData.name)
                setstatus(data.apiData.status)
                setimg(data.apiData.img)
            }else{
                console.log(data.message)
            }
        })
    },[])

    function handleform(e){
        e.preventDefault()
        let data= new FormData()
        data.append('name',name)
        data.append('desc',desc)
        data.append('mdesc',mdesc)
        data.append('price',price)
        data.append('qty',qty)
        data.append('img',img)
        data.append('status',status)

        fetch(`/api/productupdate/${id}`,{
            method:'PUT',
            body:data
        }).then((response)=>{ return response.json()}).then((data)=>{
           // console.log(data)
           if(data.status===200){
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
                        <h2>Product Update Here</h2>
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
                            <label>Product Status</label>
                            <select 
                            value={status}
                            onChange={(e)=>{setstatus(e.target.value)}}

                            className="form-select">
                                <option value="OUT STOCK">OUT STOCK</option>
                                <option value="IN STOCK">IN STOCK</option>
                            </select>
                            <div><img style={{width:'50px',margin:"10px 0px",border:"blue solid 1px" , padding:'3px 3px'}} src={`/${img}`} alt=''/></div>
                            <label>Product Image</label>
                            <input type="file"className="form-control" 
                            onChange={(e)=>{setimg(e.target.files[0])}}
                            />
                            

                            <button type="submit" className="form-control btn btn-success mt-2 mb-2">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Adminproductupdate;