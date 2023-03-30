import './App.css';
import ImagesView from './components/ImagesView'
import JSONdata from './data/examinations.json'

function App() {
  return (
    <div className="App">
      <h1>Oculo Front-End Code Test</h1>
      <p>As an Optometrist I would like to group the images of the eye into the appropriate modality.</p>
      <div className="imagesView">
        <ImagesView data={JSONdata}/>
      </div>

    </div>
  );
}

export default App;
