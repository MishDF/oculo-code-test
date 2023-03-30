import './App.css';
import UploadImage from './components/UploadImage'

function App() {
  return (
    <div className="App">
      <h1>Oculo Front-End Code Test</h1>
      <p>As an Optometrist I would like to group the images of the eye into the appropriate modality.</p>

      <div className="Button container">
        <UploadImage/>
      </div>


    </div>
  );
}

export default App;
