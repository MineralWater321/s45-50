import { Form, Button } from 'react-bootstrap';

export default function Register(){
    return(
        <Form>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="password1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group controlId="password2">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control type="password" placeholder="Verify Password" required/>
            </Form.Group>
            <Button variant="primary" type="submit" id="submitBtn">
                Submit
            </Button>
        </Form>
    )
}