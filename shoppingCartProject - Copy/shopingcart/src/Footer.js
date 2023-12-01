import { useContext } from "react";
import { Contextapi } from "./Contextapi";

function Footer() {
    const {loginname}=useContext(Contextapi)
    return ( 
        <>
        {loginname?
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">Footer</div>
                </div>
            </div>
        </section>
        :<></>
        }
        </>
     );
}

export default Footer;