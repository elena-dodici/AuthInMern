 import axios from 'axios';
import { Fragment, useEffect, useState} from 'react'
import {Link} from 'react-router-dom';


import { useParams } from 'react-router-dom';


 const EmailVerify = () =>{
    const [validUrl, setValidUrl] = useState(false);
    const param = useParams();

     useEffect(()=>{
        const verifyEmailUrl = async()=>{
            try{
                const url = `http://localhost:3001/api/users/${param.id}/verify/${param.token}`;
                const {data} = await axios.get(url);
                console.log(data);
                setValidUrl(true);
            }catch(error){
                console.log(error);
                setValidUrl(false);
            }
        };

        verifyEmailUrl();
     },[param])
    return (
        <Fragment>
            {validUrl?(
                <div >a
                    
                    <h1> successfully</h1>
                    <Link to ="/login">
                        <button>Login</button>
                    </Link>
                </div>
            ):(
                <h1>404</h1>
            )

            }
        </Fragment>
    )
 }

 export default EmailVerify;