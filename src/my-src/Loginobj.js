import {useState} from 'react'

function Loginobj(props) {
    const [Loginobj,setLoginobj]= useState({});

    const loginHandler=(e)=>{
        // console.log(e.target.name,e.target.value);
    
        // setnewLogin({[e.target.name]:e.target.value});
        setLoginobj((previousState)=>{
            return {...previousState, ...{[e.target.name]: e.target.value}}
        });

    }
    
    const LoginobjHandler=(e)=>{
        e.preventDefault();
        console.log(Loginobj);
        props.addLogin(Loginobj)

    };
  return (<div className='contain'>
    <form onSubmit={LoginobjHandler}>
    <label>Enter Bike model:
        <input type="text" placeholder="Model" name='Model' value={Loginobj.Model || ""} onChange={loginHandler}/>

    </label>
    <label>Enter Year:
        <input type="text" placeholder='Year' name='Year' value={Loginobj.Year||""} onChange={loginHandler}/>

    </label>
    <label>Enter Bike CC:
        <input type="text" placeholder='Cc' name='Cc' value={Loginobj.Cc ||""} onChange={loginHandler}/>

    </label>
<button>Submit</button>
    </form>

  </div>
   
  )
}
export default Loginobj;