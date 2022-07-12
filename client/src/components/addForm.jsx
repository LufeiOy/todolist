import React from "react";
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
    return (
        
        <div class = "p-3">
            <span class="fs-2">Add New Item</span>
            <hr></hr>
        <form  style={{width: "500px", "font-size": "1.5em"}}>
            
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputEmail4">Item</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="title"/>
            </div>
            <div class="form-group col-md-6">
            <label for="inputPassword4">Description</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="description"/>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Date</label>
            <input type="text" class="form-control" id="inputAddress" placeholder=""/>
        </div>
        <div class="form-group">
            <label for="inputAddress2">Start Time</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder=""/>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
            <label for="inputCity">End time</label>
            <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">Urgency</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Urgent</option>
                <option>Not urgent</option>
            </select>
            </div>
            <div class="form-group col-md-4">
            <label for="inputState">Importance</label>
            <select id="inputState" class="form-control">
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