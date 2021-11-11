// import Button from 'react-bootstrap/Button';
// //Bootstrap grid system components
// import Row from 'react-bootstrap/Row';
// import Column from 'react-bootstrap/Column';
// import { Row } from 'react-bootstrap';
// import { Column } from 'react-bootstrap'
import { Button, Row, Col} from 'react-bootstrap';

export default function Banner(){
    return(
        <Row>
            <Col className="p-5">
                 <h1>Zuitt Coding Bootcamp</h1>
                 <p>Opportunities for everyone, everywhere</p>
                 <Button variant="primary">Enroll now</Button>
            </Col>
        </Row>
    )    
}