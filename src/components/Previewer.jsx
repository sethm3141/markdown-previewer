import React, { useEffect, useRef } from 'react';

const Previewer = ({
  previewerOutput,
  previewerIsFull,
  setPreviewerIsFull,
}) => {
  const previewerContainerRef = useRef(null);

  useEffect(() => {
    console.log(previewerContainerRef);
    console.log(previewerContainerRef.current);
    const formatThisString = previewerContainerRef.current.innerHTML;
    let formatCode = [];
    //TODO: basically I need to research how to .find() form a string for any '<code>' and '</code>' strings of characters. Once found, I use those two index to loop through all the content between those index and format using the "react-syntax-highlighter" npm library that I found. Once done, I will need to change the string or the html somehow to reflect this new added highlights that are done? or inject a new component that I used to highlight the <code></code> words.
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
        id='previewer-output'
        ref={previewerContainerRef}
        dangerouslySetInnerHTML={previewerOutput}
      ></div>
    </section>
  );
};

export default Previewer;
