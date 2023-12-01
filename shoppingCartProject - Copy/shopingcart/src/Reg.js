import { useState } from "react";
import { Link } from "react-router-dom";
function Reg() {
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const[message,setmessage]=useState('')

    function handleform(e){
        e.preventDefault()
        const data={username,password}
        fetch('/api/reg',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then((result)=>{ return result.json()}).then((data)=>{
            if(data.status===201){
                setmessage(data.message)
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
                <h2>Register !!</h2>
                <p>{message}</p>
                <form onSubmit={(e)=>{handleform(e)}}>
                    <label>Username</label>
                    <input type='text' className="form-control" required
                    value={username}
                    onChange={(e)=>{setusername(e.target.value)}}
                    />
                    <label>Password</label>
                    <input type='text' className="form-control" required
                    value={password}
                    onChange={(e)=>{setpassword(e.target.value)}}
                    />
                    <button type="submit" className="form-control btn btn-success mt-2">Register</button>
                </form>
                <p>
                    <Link to='/'>If Already have account ?</Link>
                </p>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
</section>
     );
}

export default Reg;