import React, { useContext, useState } from 'react'
import { dbContext } from '../../App';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'
import './Home.css';

function Home() {
  const [file, setFile] = useState(null)
  const navigate = useNavigate();
  const db = useContext(dbContext)
  var fileCounter = 0

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  }

  const handleFileParse = async () => {
    if (!file) {
      console.log('No file selected');
      return;
    }

    const fileReader = new FileReader();
    return new Promise((resolve, reject) => {
      fileReader.onload = (e) => {
        resolve(e.target.result);
        const text = (e.target.result);
        fileParse(text);
      }
      fileReader.onerror = reject;
      fileReader.readAsText(file);
    })
  }

  const fileParse = async (text) => {
    fileCounter += 1

    // These lines do all the string manipulation needed to create our JS object
    const resumeName = (text.split(' ').slice(0, 2).join(' ')).slice(0, text.indexOf("Education")).replace(/(\r\n|\n|\r)/gm, "")
    const resumeEdu = text.slice(text.indexOf("Education") + 10, text.indexOf("Skills") - 1).replace(/(\r\n|\n|\r)/gm, "")
    const resumeSkills = text.slice(text.indexOf("Skills") + 7, text.indexOf("Experience") - 1).replace(/(\r\n|\n|\r)/gm, "")
    const resumeExp = text.slice(text.indexOf("Experience") + 11).replace(/(\r\n|\n|\r)/gm, "")

    // Adding all the key-value item pairs to our JS object
    var resumeData = {
      id: fileCounter,
      name: resumeName,
      education: resumeEdu,
      skills: resumeSkills,
      experience: resumeExp
    }

    // Here we add our document to the proper collection in our database
    await db.collection("files").doc(`${fileCounter}`).set(resumeData).then(() => {
      console.log("Document successfully written!");
    })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });

    setTimeout(() => {
      navigate(`/results/${fileCounter}`);
    }, 0);
  }

  return (
    <div className="format">
      <h className="logo">
        PARSUME
      </h>
      <div>
        <Form.Group controlId="formFileLg" className="file-upload" >
          <Form.Control type="file" size="lg" onChange={handleFileChange} />
        </Form.Group>
        {
          file ?
            <Button className="upload" variant="primary" onClick={handleFileParse}>Upload</Button>
            :
            <Button className="upload" variant="primary" disabled>Upload</Button>
        }
      </div>
      <Link to='/search'>
        <Button className="home-buttons" variant="primary" size="lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          Search previously submitted resumes
        </Button>
      </Link>
    </div>
  );
}

export default Home;