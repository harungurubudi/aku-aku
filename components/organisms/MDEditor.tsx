import * as React from "react";

import { Controlled as ReactCodeMirror } from "react-codemirror2";

export interface MDEditorProps {
  value: string;
  setValue: (value: string) => void;
}

export class MDEditor extends React.Component<MDEditorProps, {}> {
  public render() {
    return (
      <ReactCodeMirror
        className="editor"
        value={this.props.value}
        options={{
          mode: "gfm",
          theme: "devlover",
          lineNumbers: true,
          cursorHeight: 0.85,
          styleActiveLine: true,
          lineWrapping: true
          // lineNumberFormatter:
        }}
        onBeforeChange={(editor, data, value) => {
          this.props.setValue(value);
        }}
        onChange={() => null}
      />
    );
  }
}
