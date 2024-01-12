import React from "react";

const Previewer = () => {
  return (
    <section id='previewer-card' className='card'>
      <div className='previewer-header d-flex justify-content-between'>
        <div className='left-side-header d-flex align-items-center'>
          <i className='fa-brands fa-free-code-camp'></i>
          <h3 className='ms-2 mb-1'>Previewer</h3>
        </div>
        <div className='right-side-header d-flex align-items-center'>
          <i className='fa-solid fa-maximize font-weight-light'></i>
        </div>
      </div>
      <div className='previewer-body'></div>
    </section>
  );
};

export default Previewer;