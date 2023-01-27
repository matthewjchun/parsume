import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../../App';
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './Home.css';


function Home() {
  const [file, setFile] = useState(null)
  const firebase = useContext(FirebaseContext)

  const handleFilePondChange = (fileItems) => {
    const file = fileItems[0].file;
    firebase.storage().ref().put(file.name);
  }

  const handleFileParse = () => {
    if (!file) {
      console.log('No file selected');
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      console.log("----")
      console.log(e.target.result);
    }

    fileReader.readAsText(file);

  }


  const handleUpload = (file) => {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file.file).then(() => {
      console.log("File has been uploaded")
    })
  }             
  
  // onprocessfile={(error, file) => handleUpload(file)}


  return (
    <div className="format">
        <h className="logo">
          PARSUME
        </h>
        <div>
          <FilePond
              files={file}
              onupdatefiles={setFile}
              allowMultiple={false}
              maxFiles={1}
              name="file"
              labelIdle='Drag & Drop your Resume or <span class="filepond--label-action">Browse</span>'
          />
          {
          file ? 
            <Button className="upload" variant="primary" onClick={handleUpload}>Upload</Button> 
            :
            <Button className="upload" variant="primary" disabled>Upload</Button>
          }
        </div>
        <Link to='/search'>
          <Button className="search-previous" variant="primary" size="lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            Search previously submitted resumes 
          </Button>
        </Link>
    </div>
  );
}

export default Home;