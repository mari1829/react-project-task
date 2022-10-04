import React from "react";
import {useState,useEffect} from 'react'

 function Form1(props) {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const[vadilate,setVadilate]=useState('')
    // [previousvalue, callbackfun]
    // Synthetic events
    // two way data binding

    useEffect(()=>{
        document.title="login"
    },[])

    
   

    useEffect(()=>{
        console.log("Emty");
        if(email.includes("@") && passwd.length>7){
            setVadilate(true);
        }
        else{
            setVadilate(false);
        }
    },[email,passwd])

    const emailHandler = (e) => {
        console.log(e)
        setEmail(e.target.value);
    }

    const passwdHandler = (event) => {
        setPasswd(event.target.value);
        console.log(event);
    }

    const loginHandler = (event) => {
        event.preventDefault();
        console.log(email, passwd);
        if(email.includes("@") && (passwd.length>7)){
            props.triger(true);

        }
      
    }
    
    return (<div className="login">
        <form onSubmit={loginHandler}>
            <label>Enter email:
                <input type="text" placeholder="email" value={email} onChange={emailHandler} />

            </label>
            
            <label>Enter password:
                <input type="password" placeholder="password" value={passwd} onChange={passwdHandler}/>
            </label>
            
            {vadilate?<button>Submit</button>:<button disabled='true'>Submit</button>}
        </form>
    </div>);
}

export default Form1;
