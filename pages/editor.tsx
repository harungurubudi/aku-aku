import { Controlled as CodeMirror } from "react-codemirror2";

import * as React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";

if (process.browser) {
  require("codemirror/mode/gfm/gfm");
}

interface EditorProps {}
interface EditorState {
  value: string;
}

export default class Editor extends React.Component<EditorProps, EditorState> {
  state = {
    value: ""
  };

  handleChangeValue = value => {
    // value.test(/```([a-z]{2,})/g);
  };
  public render() {
    return (
      <CodeMirror
        className="editor"
        value={this.state.value}
        options={{
          mode: "gfm",
          theme: "dracula"
        }}
        onBeforeChange={(editor, data, value) => {
          this.setState({ value });
        }}
        onChange={(editor, data, value) => {
          this.handleChangeValue(value);
        }}
      />
    );
  }
}
