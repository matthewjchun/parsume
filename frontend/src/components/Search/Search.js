import './Search.css';
import JSONDATA from './MOCK_DATA.json'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react'

function Search() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="Format">
      {/* <div className="Search">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Category"
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#">Name</Dropdown.Item>
          <Dropdown.Item href="#">Skills</Dropdown.Item>
        </DropdownButton>
        <Form.Control id="input-form" aria-label="Text input with dropdown button" />
      </InputGroup>
      </div> */}
      <input className="Search" type="text" placeholder="Search..." onChange={e => {setSearchTerm(e.target.value)}}></input>
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return (
          <div>
            <p>{val.first_name} </p>
          </div>
        )
      })}
    </div>
  );
}

export default Search;