import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

//* interpret \n as a <br> through marked()
marked.use({ breaks: true });

const Editor = ({ editorInput, setEditorInput, setPreviewerOutput }) => {
  useEffect(() => {
    const html = marked.parse(editorInput);
    const cleanHTML = DOMPurify.sanitize(html);
    setPreviewerOutput({ __html: cleanHTML });
  }, [editorInput]);

  return (
    <section id='editor-card' className='card'>
      <div className='editor-header d-flex justify-content-between'>
        <div className='left-side-header d-flex align-items-center'>
          <i className='fa-brands fa-free-code-camp'></i>
          <h3 className='ms-2 mb-1'>Editor</h3>
        </div>
        <div className='right-side-header d-flex align-items-center'>
          <i className='fa-solid fa-maximize font-weight-light'></i>
        </div>
      </div>
      <div className='editor-body fluid-container'>
        <textarea
          id='editor'
          placeholder='Write your markdown text here...'
          value={editorInput}
          onChange={(event) => setEditorInput(event.target.value)}
        ></textarea>
      </div>
    </section>
  );
};

export default Editor;
