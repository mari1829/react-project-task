import {useState} from 'react'
import Loginobj from './Loginobj'
import Logins from './Logins';

function Login() {
    const [person,setLogin]=useState([
        {
            "Model":"Yamaha",
            "Year":"2000",
            "Cc":"125cc"
        },
        {
            "Model":"Hero",
            "Year":"2020",
            "Cc":"100cc"
        },
        {
            "Model":"TVS",
            "Year":"2022",
            "Cc":"150cc"
        }
    
]);
    const addNewLoginHandler=(person)=>{
        console.log(person);
        // person.push(persons);
        // console.log(person);
        setLogin((previousLoginobj)=>{
            return [...previousLoginobj, ...[person]];
        });

    };
  return (
    <div>
        <div className='new_Login_container'>
            <Loginobj addLogin={addNewLoginHandler}/>
        </div>
        <div className='login_list_container'>
            {
            person.map((person) => {
                return <Logins key={person.Title} persondata={person}/>
            })
        }
        </div>
    </div>
  )
};
export default Login;