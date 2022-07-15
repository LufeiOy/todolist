import React, {useState}  from "react";
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'


{/* <Form class = "p-3" >
           <span class="fs-2">Add New Item</span>
            <hr></hr>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Item
            </Button>
        </Form> */}

function AddForm(){
    const [userInputs, setInputs] = useState({id:'12',
                                            title:'', 
                                            description:'', 
                                            date:'', 
                                            start_time:'', 
                                            end_time:'',
                                            urgency: '',
                                            importace:'',
                                            finished:false});
    function changeHandler(e) {
        setInputs({...userInputs, 
                    [e.target.name]: e.target.value})
    }
    function submitHandler(e){
        //e.preventDefault()
        console.log(userInputs)
        axios.post('/api/list/add', userInputs, {
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
    const {title, description, date, start_time, end_time} = userInputs;
    return (
        
        <div class = "p-3 w-50" style={{width:"50vh"}}>
            <span class="fs-2">Add New Item</span>
            <hr></hr>
        <form  style={{width: "500px", "font-size": "1.5em"}} onSubmit={submitHandler}>
            
        <div class="form-row">
            <div class="form-group col-md-6">
            <label >Item</label>
            <input type="text" class="form-control" name="title" value={title} onChange={changeHandler} placeholder="title"/>
            </div>
            <div class="form-group col-md-6">
            <label >Description</label>
            <input type="text" class="form-control" name="description" value={description} onChange={changeHandler} placeholder="description"/>
            </div>
        </div>
        <div class="form-group">
            <label >Date</label>
            <input type="date" class="form-control" name="date" value={date} onChange={changeHandler} placeholder=""/>
        </div>
        <div class="form-group">
            <label >Start Time</label>
            <input type="time" class="form-control" name="start_time" value={start_time} onChange={changeHandler} placeholder=""/>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label >End time</label>
            <input type="time" class="form-control" name="end_time" value={end_time} onChange={changeHandler}/>
            </div>
            <div class="form-group col-md-4">
            <label >Urgency</label>
            <select id="inputState" class="form-control" name="urgency" onChange={changeHandler} >
                <option selected>Choose...</option>
                <option>Urgent</option>
                <option>Not urgent</option>
            </select>
            </div>
            <div class="form-group col-md-4">
            <label >Importance</label>
            <select id="inputState" class="form-control" name="importace" onChange={changeHandler}>
                <option selected>Choose...</option>
                <option>Important</option>
                <option>Unimportant</option>
            </select>
            </div>
        </div>
        <div class="form-group">
            <div class="form-check">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Add Item</button>
        </form>
                </div>
    );
}

export default AddForm;