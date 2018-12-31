import { Controlled as ReactCodeMirror } from "react-codemirror2";

import * as React from "react";
import { Header } from "../components/organisms/Header";

import "codemirror/lib/codemirror.css";
import MDEditor from "../components/organisms/MDEditor";
import MDRenderer from "../components/organisms/MDRenderer";

if (process.browser) {
  require("codemirror/mode/gfm/gfm");
  require("codemirror/mode/jsx/jsx");
  require("codemirror/mode/clike/clike");
  require("codemirror/mode/go/go");
}

interface EditorProps {}
interface EditorState {
  value: string;
  codeBlockLanguages: string[];
}

// const availableLanguages = ["jsx", "go"];

const initialValue = `
This is markdown title
====

# with heading

Hello guys kembali dengan saya disini
ini adalah **bold**, _italic_ ~~coret~~

\`\`\`jsx
import * as React from "react";

const Component = (props) => {
  return <div>Hello {props.world}</div>
}
\`\`\`

'single quote' with :smile:

**"Hanging** punctuation"
`;
export default class Editor extends React.Component<EditorProps, EditorState> {
  state = {
    value: initialValue,
    codeBlockLanguages: []
  };

  componentDidMount() {
    this.forceUpdate();
  }

  public render() {
    return (
      <>
        <Header />
        <div style={{ display: "flex" }}>
          <div
            style={{
              height: "calc(100vh - 60px)",
              flex: 1,
              maxWidth: "50%",
              position: "relative",
              zIndex: 1,
              boxShadow: "0 0 20px rgba(0,0,0,.2)"
            }}
          >
            <MDEditor
              value={this.state.value}
              setValue={value => this.setState({ value })}
            />
          </div>
          <div
            style={{
              maxWidth: "50%",
              padding: 20,
              borderLeft: "solid 1px rgba(0,0,0,.05)",
              height: "calc(100vh - 60px)",
              flex: 1,
              overflow: "auto",
              fontSize: 14
            }}
          >
            <MDRenderer value={this.state.value} />
          </div>
        </div>
      </>
    );
  }
}
