import './Search.css';
import { dbContext } from '../../App';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react'

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState([]);
  const db = useContext(dbContext)

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection('files').get();
      const fetchedData = snapshot.docs.map(doc => doc.data());
      setData(fetchedData);
    }
    fetchData();
  }, []);


  return (
    <div>
      <div className="header">
        <Link to='/'>
          <Button className="Search search-logo" variant="primary">PARSUME</Button>
        </Link>
      </div>
      <div className="search-format">
        <input type="text" placeholder="Search by Applicant Name..." onChange={e => { setSearchTerm(e.target.value) }}></input>
        <Table className="search-table" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Applicant Name</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((item) => {
              if (searchTerm == "") {
                return item
              } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return item
              }
            }).slice(0, 10).map(item => (
              <tr>
                <td>{item.id}</td>
                <td>
                  <Link to={`/results/${item.id}`} key={item.id} >
                    {item.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Search;