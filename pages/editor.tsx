import { Controlled as CodeMirror } from "react-codemirror2";

import * as React from "react";
import { Header } from "../components/organisms/Header";

import "codemirror/lib/codemirror.css";

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

const availableLanguages = ["jsx", "go"];

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
`;
export default class Editor extends React.Component<EditorProps, EditorState> {
  state = {
    value: initialValue,
    codeBlockLanguages: []
  };

  // private checkLangList = val => {
  //   const langMatch = val.match(/```[a-z]*\n[\s\S]*?\n```/g);
  //   if (langMatch) {
  //     const { codeBlockLanguages } = this.state;
  //     langMatch.forEach((item: string) => {
  //       const foundLang = item.split("\n")[0].split("```")[1];
  //       let found = false;
  //       codeBlockLanguages.forEach(currentCodeLang => {
  //         if (currentCodeLang === foundLang) {
  //           found = true;
  //         }
  //       });
  //       if (!found) {
  //         availableLanguages
  //         this.setState({
  //           codeBlockLanguages: [...codeBlockLanguages, foundLang]
  //         });
  //       }
  //     });
  //   }
  // };

  handleChangeValue = (value: string) => {
    // this.checkLangList(value);
  };
  public render() {
    console.log(this.state.codeBlockLanguages);
    return (
      <>
        <Header />
        <div style={{ height: "calc(100vh - 60px)", width: "100%" }}>
          <CodeMirror
            className="editor"
            value={this.state.value}
            options={{
              mode: "gfm",
              theme: "devlover",
              lineNumbers: true
            }}
            onBeforeChange={(editor, data, value) => {
              this.setState({ value });
            }}
            onChange={(editor, data, value) => {
              this.handleChangeValue(value);
            }}
          />
        </div>
      </>
    );
  }
}
