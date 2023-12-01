import { useContext } from "react";
import { Link } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Productstr(props) {
    const{pdata}=props
    const {cart,setCart }=useContext(Contextapi)
    function handleaddcart(e,id,qty){
       // console.log(id)
    //    if(cart.items[id]>=qty){
    //     alert('you have')
    //    }
       
       let _cart={...cart}
       if(!_cart.items){
        _cart.items={}
       }
       if(!_cart.items[id]){
        _cart.items[id]=1
       }else{
        _cart.items[id] +=1
       }
       if(!_cart.totalitems){
        _cart.totalitems=1
       }else{
        _cart.totalitems +=1
       }
       setCart(_cart)
       console.log(cart)
    }
    return (

        <div className="col-md-3">
            <div className="card" style={{width: "17rem"}}>
                <img src={pdata.img} className="card-img-top mx-auto mt-2" alt="..." style={{width:"60px",height:"60px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{pdata.name}</h5>
                        <p className="card-text">{pdata.desc}</p>
                        <Link to="/" className="btn btn-primary me-2">Go somewhere</Link>
                        <button className="btn btn-success" onClick={(e)=>{handleaddcart(e,pdata._id,pdata.quantity)}}>Add Cart</button>
                    </div>
            </div>
        </div>
    );
}

export default Productstr;