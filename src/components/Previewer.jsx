import React from 'react';

const Previewer = ({
  previewerOutput,
  previewerIsFull,
  setPreviewerIsFull,
}) => {
  // const previewerContainerRef = useRef(null);

  // useEffect(() => {
  //   console.log(previewerContainerRef);
  //   console.log(previewerContainerRef.current);
  //   console.log(previewerContainerRef.current.innerHTML);
  //   const formatThisString = previewerContainerRef.current.innerHTML;
  //   let formatCodeIndex = []; //? Store pairs of <code> and </code> index
  //   let i1 = 0; //? This is for the <code> part of the element
  //   let i2 = 0; //? This is for the </code> part of the element
  //   const MOVE_INDEX_FORWARD = 6; //? This moves to the next character after <code>
  //   const MOVE_INDEX_BACKWARD = 1; //? This is for moving just behind the character of </code>
  //   while (true) {
  //     while (true) {
  //       i1 = formatThisString.indexOf('<pre>', i1);
  //       i2 = formatThisString.indexOf('</pre>', i2);
  //       if (i1 == -1 || i2 == -1) break;
  //       if (i1 > i2) {
  //         i1 = i2 + 1;
  //         i2 = i2 + 1;
  //         return;
  //       }
  //       break;
  //     }
  //     if (i1 == -1 || i2 == -1) break;
  //     formatCodeIndex.push(i1);
  //     formatCodeIndex.push(i2);
  //     i1 = i2 + 1;
  //     i2 = i2 + 1;
  //   }
  //   console.log(formatCodeIndex);

  //   if (formatThisString.length > 0) {
  //   }

  //   //TODO: basically I need to research how to .find() form a string for any '<code>' and '</code>' strings of characters. Once found, I use those two index to loop through all the content between those index and format using the "react-syntax-highlighter" npm library that I found. Once done, I will need to change the string or the html somehow to reflect this new added highlights that are done? or inject a new component that I used to highlight the <code></code> words.
  // }, [previewerOutput]);

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
        // ref={previewerContainerRef}
        dangerouslySetInnerHTML={previewerOutput}
      ></div>
    </section>
  );
};

export default Previewer;
