import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';

export default function Error(){
    return(
            <Row>
                <Col className="p-5">
                <h1>Page Not Found</h1>
                Go back to the <Link to="/">homepage</Link>
                </Col>
            </Row>
    )    
}