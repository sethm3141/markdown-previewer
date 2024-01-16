import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/nnfx-light.css';

const Previewer = ({
  previewerOutput,
  previewerIsFull,
  setPreviewerIsFull,
}) => {
  const highlightCode = () => {
    const nodes = document.querySelectorAll('pre code');
    nodes.forEach((node) => hljs.highlightBlock(node));
  };

  useEffect(() => {
    highlightCode();
  }, [previewerOutput]);

  return (
    <section id='previewer-card' className='card'>
      <div className='previewer-header d-flex justify-content-between'>
        <div className='left-side-header d-flex align-items-center'>
          <i className='fa-brands fa-free-code-camp'></i>
          <h3 className='ms-2 mb-1'>Previewer</h3>
        </div>
        <div className='right-side-header d-flex align-items-center'>
          {!previewerIsFull ? (
            <i
              className='fa-solid fa-maximize font-weight-light'
              onClick={() => setPreviewerIsFull(!previewerIsFull)}
            ></i>
          ) : (
            <i
              className='fa-solid fa-down-left-and-up-right-to-center'
              onClick={() => setPreviewerIsFull(!previewerIsFull)}
            ></i>
          )}
        </div>
      </div>
      <div
        className='previewer-body fluid-container'
        id='preview'
        dangerouslySetInnerHTML={previewerOutput}
      ></div>
    </section>
  );
};

export default Previewer;
