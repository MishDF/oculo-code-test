import './App.css';
import ImagesView from './components/ImagesView'

function App() {
  return (
    <div className="App">
      <h1>Oculo Front-End Code Test</h1>
      <p>As an Optometrist I would like to group the images of the eye into the appropriate modality.</p>
      <div className="imagesView">
        <ImagesView/>
      </div>

    </div>
  );
}

export default App;
