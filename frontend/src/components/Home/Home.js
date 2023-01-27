import React, { useState } from 'react'
import { FilePond, registerPlugin } from 'react-filepond'
// File, 

// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-imsage-preview.css';
import 'filepond/dist/filepond.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import './Home.css';

// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function Home() {
  const [files, setFiles] = useState([])



  return (
    <div className="format">
        <h className="logo">
          PARSUME
        </h>
        <FilePond
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            maxFiles={1}
            server="/api"
            name="files" /* sets the file input name, it's filepond by default */
            labelIdle='Drag & Drop your Resume or <span class="filepond--label-action">Browse</span>'
        />
        <Link to='/search'>
          <button type="button" class="btn btn-primary btn-lg btn-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg> 
            Search previously submitted resumes  
          </button>
        </Link>
    </div>
  );
}

export default Home;