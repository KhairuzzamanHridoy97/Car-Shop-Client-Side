import React ,{useState}from 'react';
import { Alert, Button, TextField } from '@mui/material';

const MakeAdmin =()=>{
    const [email,setEmail] = useState('')
    const [success,setSuccess]= useState(false);

    const handleOnBlur =e=>{
       
        setEmail(e.target.value)
    }
     const handleAdminSubmit = e =>{
            const user ={email};
            fetch('https://limitless-scrubland-11621.herokuapp.com/users/admin',{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                }
                ,body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount){
                    console.log(data)
                    // setEmail('');
                    setSuccess(true)
                }
            })
            e.preventDefault()
        }
    return (
        <div>
             <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{width:"50%"}}
            id="standard-basic" 
            label="Email"
            type="email"
            onBlur={handleOnBlur} 
            variant="standard" 
            />
            <Button type='submit' variant='contained'> Make Admin </Button>

            </form>
            {success && <Alert severity="success">Make admin successfully!</Alert>}
        </div>
        
    )
}

export default MakeAdmin ;