import { Controlled as CodeMirror } from "react-codemirror2";

import * as React from "react";
import "codemirror/lib/codemirror.css";

if (process.browser) {
  require("codemirror/mode/gfm/gfm");
  require("codemirror/mode/jsx/jsx");
}

interface EditorProps {}
interface EditorState {
  value: string;
}

const availableLanguage = ["jsx"];

export default class Editor extends React.Component<EditorProps, EditorState> {
  state = {
    value: "",
    codeBlockLanguage: []
  };

  handleChangeValue = value => {
    const lang = value.match(/```[a-z]*\n[\s\S]*?\n```/g);
    console.log(lang);
  };
  public render() {
    return (
      <div style={{ height: "100vh", width: "50%" }}>
        <CodeMirror
          className="editor"
          value={this.state.value}
          options={{
            mode: "gfm",
            theme: "one-dark-vivid"
          }}
          onBeforeChange={(editor, data, value) => {
            this.setState({ value });
          }}
          onChange={(editor, data, value) => {
            this.handleChangeValue(value);
          }}
        />
      </div>
    );
  }
}
