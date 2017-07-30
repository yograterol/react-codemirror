import React from 'react';
import ReactDOM from 'react-dom';
import CodeMirror from '../src/index.js';

require('codemirror/mode/python/python');
require('codemirror/theme/monokai.css');

const options = {
  lineNumbers: true,
  mode: 'python',
  theme: 'monokai'
};

class App extends React.Component {
  render() {
    return <CodeMirror options={options} />;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
