import { Link } from 'react-router-dom';
import { Row, Col} from 'react-bootstrap';
import Banner from '../components/Banner';

export default function Error(){
    return(
            <Row>
                <Col>
                <h1>Page Not Found</h1>
                Go back to the <Link to="/">homepage</Link>
                </Col>
            </Row>
    )    
}