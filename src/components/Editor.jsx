import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

//* interpret \n as a <br> through marked()
marked.use({ breaks: true });

//* constant for textarea height
const MIN_TEXTAREA_HEIGHT = 200;

const Editor = ({
  editorInput,
  setEditorInput,
  setPreviewerOutput,
  editorIsFull,
  setEditorIsFull,
}) => {
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    if (editorIsFull) {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = '90vh';
    } else {
      textareaRef.current.style.height = 'inherit';
      textareaRef.current.style.height = MIN_TEXTAREA_HEIGHT;
    }
  }, [editorIsFull]);

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
          {!editorIsFull ? (
            <i
              className='fa-solid fa-maximize font-weight-light'
              onClick={() => {
                setEditorIsFull(!editorIsFull);
                return;
              }}
            ></i>
          ) : (
            <i
              className='fa-solid fa-down-left-and-up-right-to-center'
              onClick={() => {
                setEditorIsFull(!editorIsFull);
                return;
              }}
            ></i>
          )}
        </div>
      </div>
      <div className='editor-body fluid-container'>
        <textarea
          id='editor'
          placeholder='Write your markdown text here...'
          ref={textareaRef}
          style={{ minHeight: MIN_TEXTAREA_HEIGHT }}
          value={editorInput}
          onChange={(event) => setEditorInput(event.target.value)}
        ></textarea>
        <div className='scroll-bar-space'></div>
      </div>
    </section>
  );
};

export default Editor;
