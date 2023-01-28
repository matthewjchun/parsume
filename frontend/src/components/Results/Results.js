import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { dbContext } from '../../App';
import './Results.css';

function Results() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)

  const db = useContext(dbContext)

  useEffect(() => {
    const fetchData = async () => {
      const doc = await db.collection('files').doc(id).get();
      setData(doc.data());
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='results-format'>
      <div className="results-header">
        <Link to='/'>
          <Button variant="primary">Return Home</Button>
        </Link>
        <Link to='/search'>
          <Button variant="primary">Return to Search</Button>
        </Link>
      </div>
      <h className="results-name">
        {data.name}
      </h>
      <p>Applicant Data:</p>
      <Table striped bordered hover className="results-table" variant="dark">
        <tbody>
          <tr>
            <td>Education</td>
            <td>{data.education}</td>
          </tr>
          <tr>
            <td>Skills</td>
            <td>{data.skills}</td>
          </tr>
          <tr>
            <td>Experience</td>
            <td>{data.experience}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Results;