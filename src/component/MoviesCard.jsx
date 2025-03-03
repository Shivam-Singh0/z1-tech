import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MoviesCard({id, Title, Poster, Year}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
         {Year}
        </Card.Text>
        <Link className='btn btn-primary' to={id}>Go</Link>
      </Card.Body>
    </Card>
  );
}

export default MoviesCard;