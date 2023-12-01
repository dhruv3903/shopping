import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Header() {
    const navigate=useNavigate()
    const{loginname,setloginname,cart}=useContext(Contextapi)
    function handlelogout(e){
        setloginname(localStorage.removeItem('loginname'))
        navigate('/')
    }
    return ( 
        <>
        {loginname? //ternary operator

        <section id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Welcome {loginname}</h4>
                    </div>
                    <div className="col-md-8">
                        <button className="btn btn-danger" onClick={(e)=>{handlelogout(e)}}>Logout</button>
                        <Link to="/myorders"><button className="btn btn-info me-2">My Orders</button></Link> 
                        <Link to="/cart"><button className="btn btn-info me-2">Cart : {!cart.totalitems?0:cart.totalitems}</button></Link>
                        <Link to="/products"><button className="btn btn-info me-2">Products</button></Link> 
                    </div>
                </div>
            </div>
        </section>

        :<></>
        }
        </>
     );
}

export default Header;