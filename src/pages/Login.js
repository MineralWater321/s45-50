import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Login(props) {
		// State hooks to store the values of the input fields
		const [email, setEmail] = useState('');
	    const [password, setPassword] = useState('');
	    // State to determine whether submit button is enabled or not
	    const [isActive, setIsActive] = useState(false);

	    function authenticate(e) {

	        // Prevents page redirection via form submission
	        e.preventDefault();

            //Set the email of the authenticated user in the local storage
            //Syntax: localStorage.setItem('propertyName', value);
            localStorage.setItem('email', email)

	        // Clear input fields after submission
	        setEmail('');
	        setPassword('');

	        alert(`${email} has been verified! Welcome back!`);

	    }


		useEffect(() => {

	        // Validation to enable submit button when all fields are populated and both passwords match
	        if(email !== '' && password !== ''){
	            setIsActive(true);
	        }else{
	            setIsActive(false);
	        }

	    }, [email, password]);


    return (
        <Form onSubmit={(e) => authenticate(e)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            { isActive ? 
                <Button variant="primary" type="submit" id="submitBtn">
                    Submit
                </Button>
                : 
                <Button variant="danger" type="submit" id="submitBtn" disabled>
                    Submit
                </Button>
            }
        </Form>
    )
}
