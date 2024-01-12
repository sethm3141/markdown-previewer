import './assets/css/index.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  return (
    <div className='fluid-container d-flex flex-column align-items-center'>
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
