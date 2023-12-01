import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contextapi } from "./Contextapi";

function Login() {
    const {setloginname}=useContext(Contextapi)
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[message,setmessage]=useState('')
    const[login,setLogin]=useState('')
    const navigate=useNavigate()

    function handleform(e){
        e.preventDefault()
        const formdata={username,password}
        fetch('/api/logincheck',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((result)=>{ return result.json()}).then((data)=>{
            if(data.status===200 && data.username==="admin"){
                localStorage.setItem('loginname',data.username)
                setloginname(localStorage.getItem('loginname'))
                 navigate('/dashboard')
            }else if(data.status===200 && data!=="admin"){
                localStorage.setItem('loginname',data.username)
                setloginname(localStorage.getItem('loginname'))
                navigate('/products')
            }else{
                setmessage(data.message)
            }
        })
    }
    return ( 
        <section id="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2>Login !!</h2>
                        <p>{message}</p>
                        <form onSubmit={(e)=>{handleform(e)}}>
                            <label>Username</label>
                            <input type='text' className="form-control" required
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value)}}
                            />
                            <label>Password</label>
                            <input type='text' className="form-control" required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            />
                            <button type="submit" className="form-control btn btn-success mt-2">Login</button>
                        </form>
                        <p>
                            <Link to='/reg'>Registeration</Link>
                        </p>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
     );
}

export default Login;