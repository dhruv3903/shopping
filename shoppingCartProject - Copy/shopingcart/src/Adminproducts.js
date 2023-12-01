import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Left from "./Left";

function Adminproducts() {
    const [productData,setproductData]=useState([])

    useEffect(()=>{
        fetch("/api/allproducts").then((response)=>{return response.json()}).then((data)=>{
            if(data.status===200){
                setproductData(data.apiData)
            }else{
                console.log(data.message)
            }
        })
    },[])
    
    return ( 
        <>
        <section id="mid">
            <div className="container">
                <div className="row">
                    <Left/>
                    <div className="col-md-9">
                        <h2>Product Management</h2>
                        <Link to="/adminaddproducts"><button className="btn btn-success form-control mb-3">Add Product</button></Link>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Product More Description</th>
                                    <th>Product Quantity</th>
                                    <th>Created Date</th>
                                    <th>Image</th>
                                    <th>Product Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {productData.map((result,dd)=>(
                                    <tr key={result._id}>
                                    <td>{dd+1}</td>
                                    <td>{result.name}</td>
                                    <td>{result.desc}</td>
                                    <td>{result.price}</td>
                                    <td>{result.mdesc}</td>
                                    <td>{result.quantity}</td>
                                    <td>{result.createdDate}</td>
                                    <td><img style={{width:'50px'}} src={result.img} alt=''/></td>
                                    <td>{result.status}</td>
                                    <td><Link to={`/productupdate/${result._id}`}><button className="btn btn-info">Update</button></Link></td>
                                </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
        </>
     );
}

export default Adminproducts;