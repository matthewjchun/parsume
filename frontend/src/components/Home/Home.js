import React, { useState } from 'react'
import { FilePond, File, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import './Home.css';

function Home() {
  const [files, setFiles] = useState([])

  return (
    <div className="Format">
        <h className="Logo">
          PARSUME
        </h>
        <FilePond
            className="Input"
            files={files}
            onupdatefiles={setFiles}
            allowMultiple={false}
            maxFiles={1}
            server="/api"
            name="files" /* sets the file input name, it's filepond by default */
            labelIdle='Drag & Drop your Resume or <span class="filepond--label-action">Browse</span>'
        />
    </div>
  );
}

export default Home;