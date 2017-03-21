/*eslint-disable */
import React from 'react'
import TinyMCE from 'react-tinymce'
import MyEditor from './DraftJS.js'

/*eslint-enable */

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent())
  }

  render() {
    return (
      <div>
        {/*<TinyMCE
          content="<p>This is a story about a man who wanted to learn to develop code again. He started off with learning ReactJS which is just awesome :)</p>"
          config={{
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
          }}
          onChange={this.handleEditorChange}
        />*/}
        <MyEditor />
      </div>
    )
  }
}

export default App

