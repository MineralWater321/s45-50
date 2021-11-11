import { Row, Col, Card, Button} from 'react-bootstrap';

export default function CourseCard({courseProp}){
    // console.log(props);
    const {name, description, price} = courseProp;
    return(
        <Row  className="mt-3 mb-3">
            <Col xs={12} md={12}>
                <Card className="courseCard p-3">
                    <Card.Body>
                        <Card.Title>
                            <h4>{name}</h4>
                        </Card.Title>
                        <Card.Text>
                                <strong>Description</strong><br />
                                {description}<br />
                                <br />
                                <strong>Price: </strong><br />
                                PhP {price}
                        </Card.Text>
                        <Button variant="primary">Enroll</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}