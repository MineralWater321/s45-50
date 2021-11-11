import { Row, Col, Card, Button} from 'react-bootstrap';

export default function CourseCard(){
    return(
        <Row  className="mt-3 mb-3">
            <Col xs={12} md={12}>
                <Card className="courseCard p-3">
                    <Card.Body>
                        <Card.Title>
                            <h4>Sample Course</h4>
                        </Card.Title>
                        <Card.Text>
                            <p>
                                Description: <br />
                                This is a sample course offering. <br />
                                <br />
                                Price: <br />
                                PhP 40,000
                            </p>
                        </Card.Text>
                        <Button variant="primary">Enroll</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}