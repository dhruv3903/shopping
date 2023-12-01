import { useEffect, useState } from "react";
import Productstr from "./Productstr";

function Products() {
    const [productdata,setproductdata]=useState([])
    useEffect(()=>{
    fetch('/api/stockdata').then((response)=>{return response.json()}).then((data)=>{
        if(data.status===200){
            setproductdata(data.apiData)
        }else{
            console.log(data.message)
        }
    })
    },[])
    return (
        <section>
            <div className="container">
                <div className="row">
                    {productdata.map((result,tt)=>(
                        <Productstr pdata={result} />
                    ))}
                    
                </div>
            </div>
        </section>
    );
}

export default Products;