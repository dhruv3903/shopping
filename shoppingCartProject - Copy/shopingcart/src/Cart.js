import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi"

function Cart() {
    const navigate=useNavigate()
    const [cartdata, setcartdata] = useState([])
    const [isloading,setisloading]=useState(true)
    const { cart , setCart} = useContext(Contextapi)
    let amount=0
    useEffect(() => {
        if(!cart.items){
            return
        }
        fetch('/api/cart', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        }).then((response) => { return response.json() }).then((data) => {
            if (data.status === 200) {
                setcartdata(data.apiData)
                setisloading(false)
            } else {
                console.log(data.message)
            }
        })
    }, [cart])
    function handleqty(id) {
        return cart.items[id]
    }
    function handleprice(id, price) {
        let productprice= handleqty(id) * price
        amount +=productprice
        return productprice
    }
    function handleinc(e,id,qty){
        let currentquantity=handleqty(id)
        console.log(currentquantity)
        if(currentquantity==qty){
            alert("You have reached the maxium quantity")
           return
        }
        let _cart={...cart}
        _cart.items[id] = currentquantity + 1
        _cart.totalitems +=1
        setCart(_cart)
    }
    function handledec(e,id){
        let currentquantity=handleqty(id)
        if(currentquantity===1){
            return
        }
        let _cart={...cart}
        _cart.items[id] = currentquantity - 1
        _cart.totalitems -=1
        setCart(_cart)
    }
    function handledelete(e,id){
        let currentquantity=handleqty(id)
        let _cart={...cart}
        delete _cart.items[id]
        _cart.totalitems -=currentquantity
        setCart(_cart)
    }
    function handlecheckout(e){
        let username=localStorage.getItem("loginname")
        fetch(`/api/cartvalue/${username}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(cart)
        }).then((response)=>{return response.json()}).then((data)=>{
            if(data.status===201){
                alert("Your order has been placed successfully")
                setCart('')
                navigate('/products')
            }else{
                console.log(data.message)
            }
        })
    }
    return (
        <>
        {cartdata.length?
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        {isloading && <h2>Data is loading</h2>}
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Product Name</th>
                                    <th>Product Quantity</th>
                                    <th>Product Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartdata.map((result, tt) => (
                                    <tr key={result._id}>
                                        <td>{tt + 1}</td>
                                        <td>{result.name}</td>
                                        <td><button className="btn me-2" onClick={(e)=>{handleinc(e,result._id,result.quantity)}}> + </button>{handleqty(result._id)}<button className="btn ms-2" onClick={(e)=>{handledec(e,result._id)}}> - </button></td>
                                        <td>{handleprice(result._id, result.price)}</td>
                                        <td><button onClick={(e)=>{handledelete(e,result._id)}}>Delete</button></td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={5}><h4>Total : {amount}</h4></td>
                                </tr>
                                <tr>
                                    <td colSpan={5}><button className="btn btn-success form-control mt-2" onClick={(e)=>{handlecheckout(e)}} >Check Out</button></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </section>
        :<img src="emptycart2.png" alt="" style={{width:"50%" , height:"550px" , marginLeft:"300px"}}/>}
        </>
    );
}

export default Cart;