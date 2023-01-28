import './Search.css';
import { dbContext } from '../../App';
import Button from 'react-bootstrap/Button';
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
        <input className="Search" type="text" placeholder="Search..." onChange={e => { setSearchTerm(e.target.value) }}></input>
        {data.filter((item) => {
          if (searchTerm == "") {
            return item
          } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item
          }
        }).slice(0, 10).map(item => (
          <Link to={`/results/${item.id}`} key={item.id} >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;