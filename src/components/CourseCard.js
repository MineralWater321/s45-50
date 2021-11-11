import { useState } from 'react';
//Proptypes - used to valdate props
import PropTypes from 'prop-types';
import { Card, Button} from 'react-bootstrap';

export default function CourseCard({courseProp}){
    // console.log(props);
    const {name, description, price} = courseProp;

    //State hook - used to keep track of information related to individual components
    //Syntax: const [getter, setter] = useState(initialGetterValue);
    const [count, setCount] = useState(0);

    function enroll(){
        setCount(count + 1);
    }

    return(
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Description</Card.Subtitle>
                <Card.Text>{description}</Card.Text>     
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP {price}</Card.Text>
                <Card.Text>Enrollees: {count}</Card.Text>
                <Button variant="primary" onClick={enroll}>Enroll</Button>
            </Card.Body>
        </Card>
            
    )
}

//Check validity of the PropTypes
CourseCard.propTypes = {
    //"shape" method is used to check if a prop object conforms to a specific shape
    course: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    })
}