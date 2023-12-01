import { useContext, useEffect ,useState } from "react";
import { Contextapi } from "./Contextapi";

function Myorders() {
    const {loginname}=useContext(Contextapi)
    const [userdata, setuserdata] = useState([])
    useEffect(()=>{
        fetch(`/api/userdata/${loginname}`).then((response)=>{return response.json()}).then((data)=>{
            //console.log(data)
            if(data.status===200){
                setuserdata(data.apiData)
            }else{
                console.log(data.message)
            }
        })
    },[])
    return ( 
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Product Name</th>
                                    <th>Product Quantity</th>
                                    <th>Product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userdata.map((result,tt)=>(
                                <tr key={result._id}>
                                    <td>{tt+1}</td>
                                    <td>{result.name}</td>
                                    <td>{result.qty}</td>
                                    <td>{result.price}</td>
                                </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Myorders;