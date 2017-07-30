import React from 'react';
import PropTypes from 'prop-types';

const CodeMirrorLib = require('codemirror/lib/codemirror');
require('codemirror/lib/codemirror.css');

const propTypes = {
  options: PropTypes.object,
  onChange: PropTypes.func
};

class CodeMirror extends React.Component {
  componentDidMount() {
    const codeMirrorInstance = CodeMirrorLib;
    this.codeMirror = codeMirrorInstance.fromTextArea(
      this.textareaEditor,
      this.props.options
    );
  }

  render() {
    return (
      <div>
        <textarea
          ref={input => (this.textareaEditor = input)}
          name="codemirror"
        />
      </div>
    );
  }
}

CodeMirror.propTypes = propTypes;

export default CodeMirror;
