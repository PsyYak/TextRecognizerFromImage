import './App.css';
import {useState} from 'react';
import Tesseract from 'tesseract.js';

function App() {
  const [file,setFile] = useState();
  const [progress,setProgress] = useState(0);
  const [language,setlanguage] = useState("eng");
  const [result,setResult] = useState("");



  const onFileChange = (e) => {
    // log the actual file that was uploaded by the user
   console.log("file type is: "+e.target.files[0].type);
   // make sure user using the extenstions we want
   if(e.target.files[0].type !== "image/*"){
     alert("Wrong file extention");
     e.target.value = null;
   }else{
    setFile(e.target.files[0]);
  }
  };
   // after pressing submit, send the actual file to here
  const processImage = () => {
    // if user already uploaded an image beofore, reset the result text & progress bar from screen
    if(result !== ""){
      setResult("");
      setProgress(0);
    } 
    //console.log("selected file is:"+file);
    //console.log("selected language is:"+language);
    //console.log(file);
    Tesseract.recognize(
        file,
        language, 
        { logger: result => {
          if(result.status === 'recognizing text'){
              setProgress(result.progress);
            }
        }
      }).then(({ data: { text } }) => {
         //console.log(text);
         setResult(text);
         });
  }
  return (
    <div className="App">
      <input type="file" onChange={onFileChange} accept="image/png, image/jpeg, image/jpg"/>       
              <select value={language} onChange= {(e) => setlanguage(e.target.value)}>
                <option value="eng">English</option>
                <option value="heb">Hebrew</option>
                <option value="fra">French</option>
                <option value="ara">Arabic</option>
                <option value="rus">Russian</option>
                <option value="spa">Spanish</option>
              </select>  
         <div className="submitButton">
           <input type="button" value="Submit" onClick={processImage}/>
         </div>    
      <div className="progressBar">
        <progress value={progress} max={1}/>
      </div>
      {result !== "" && (
        <div className="textResult">
          Result: {result}
        </div>
       )}
    </div>
  );
}
export default App;
