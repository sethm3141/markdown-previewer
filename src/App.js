import './assets/css/index.css';

function App() {
  return (
    <div className='fluid-container d-flex flex-column align-items-center'>
      <section id='editor' className='card'>
        <div className='header d-flex justify-content-between'>
          <div className='left-side-header d-flex align-items-center'>
            <i className='fa-brands fa-free-code-camp'></i>
            <h3 className='ms-2 mb-1'>Editor</h3>
          </div>
          <div className='right-side-header d-flex align-items-center'>
            <i className='fa-solid fa-maximize font-weight-light'></i>
          </div>
        </div>
        <div className='body'>
          <textarea id='editor' rows='4' cols='50'>
            At w3schools.com you will learn how to make a website. They offer
            free tutorials in all web development technologies.
          </textarea>
        </div>
      </section>
      <section id='previewer' className='card'>
        <div className='header d-flex justify-content-between'>
          <div className='left-side-header d-flex align-items-center'>
            <i className='fa-brands fa-free-code-camp'></i>
            <h3 className='ms-2 mb-1'>Previewer</h3>
          </div>
          <div className='right-side-header d-flex align-items-center'>
            <i className='fa-solid fa-maximize font-weight-light'></i>
          </div>
        </div>
        <div className='body'></div>
      </section>
    </div>
  );
}

export default App;
