import { Controlled as ReactCodeMirror } from "react-codemirror2";

import * as React from "react";
import { Header } from "../components/organisms/Header";

import remark from "remark";
import remarkReact from "remark-react";
import highlighter from "remark-react-codemirror";
import sanitizeGhSchema from "hast-util-sanitize/lib/github.json";
import merge from "deepmerge";

import "codemirror/lib/codemirror.css";

let CodeMirror;
if (process.browser) {
  CodeMirror = require("codemirror");
  require("codemirror/addon/runmode/runmode");
  require("codemirror/mode/meta");
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

  componentDidMount() {
    this.forceUpdate();
  }

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

  renderMarkdown = () => {
    let remarkOption = {};
    if (process.browser) {
      const schema = merge(sanitizeGhSchema, {
        attributes: { code: ["className"] }
      });
      try {
        remarkOption = {
          sanitize: schema,
          remarkReactComponents: {
            code: highlighter(CodeMirror, {
              theme: "devlover"
            })
          }
        };
      } catch (e) {
        console.error(e);
      }
    }
    return remark()
      .use(remarkReact, remarkOption)
      .processSync(this.state.value).contents;
    // return null;
  };
  public render() {
    return (
      <>
        <Header />
        <div style={{ display: "flex" }}>
          <div style={{ height: "calc(100vh - 60px)", flex: 1 }}>
            <ReactCodeMirror
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
          <div style={{ height: "calc(100vh - 60px)", flex: 1 }}>
            {this.renderMarkdown()}
          </div>
        </div>
      </>
    );
  }
}
