import * as React from "react";

import remark from "remark";
import remarkReact from "remark-react";
import remarkTextr from "remark-textr";
import gemojiToEmoji from "remark-gemoji-to-emoji";

import typographicBase from "typographic-base";
import highlighter from "remark-react-codemirror";
import sanitizeGhSchema from "hast-util-sanitize/lib/github.json";
import merge from "deepmerge";

let CodeMirror;
if (process.browser) {
  CodeMirror = require("codemirror");
  require("codemirror/addon/runmode/runmode");
  require("codemirror/mode/meta");
}

export interface MDRendererProps {
  value: string;
}

export class MDRenderer extends React.Component<MDRendererProps, {}> {
  componentDidMount() {
    this.forceUpdate();
  }

  // get first text from react components
  getFirstText = (content: React.ReactNode): string => {
    if (!content) {
      return "";
    }
    const firstContent = content[0];
    if (typeof firstContent === "string") {
      return firstContent[0];
    }
    if (typeof firstContent === "object") {
      return this.getFirstText(firstContent.props.children);
    }
    return "";
  };

  getHangingPunctuationClass = (content: React.ReactNode): string => {
    const firstText = this.getFirstText(content);
    if (/(’|'|‘|’)/.test(firstText)) {
      return "hang-one";
    }
    if (/(“|”|"|«|»)/.test(firstText)) {
      return "hang-two";
    }
    return "";
  };

  renderBlock = (el: string) => (props: React.HTMLAttributes<HTMLElement>) => {
    const hangingClass = this.getHangingPunctuationClass(props.children);
    return React.createElement(el, { className: hangingClass }, props.children);
  };

  // renderP = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
  //   const hangingClass = this.getHangingPunctuationClass(props.children);
  //   return <p className={hangingClass}>{props.children}</p>;
  // };

  // renderH1 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  //   const hangingClass = this.getHangingPunctuationClass(props.children);
  //   return <h1 className={hangingClass}>{props.children}</h1>;
  // };

  // renderH2 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  //   const hangingClass = this.getHangingPunctuationClass(props.children);
  //   return <h2 className={hangingClass}>{props.children}</h2>;
  // };
  // renderH3 = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  //   const hangingClass = this.getHangingPunctuationClass(props.children);
  //   return <h2 className={hangingClass}>{props.children}</h2>;
  // };

  renderPre = (props: React.HTMLAttributes<HTMLPreElement>) => {
    return (
      <pre
        className="pre-highlight"
        style={{
          position: "relative",
          zIndex: 3,
          padding: 10,
          borderRadius: 6,
          boxShadow: "0 3px 30px rgba(0,0,0,.3)",
          overflow: "auto"
        }}
      >
        {props.children}
      </pre>
    );
  };

  renderCode(props: React.HTMLAttributes<HTMLBaseElement>) {
    if (props.className && process.browser) {
      const HighlightedCode = highlighter(CodeMirror, { theme: "devlover" });
      return <HighlightedCode {...props} />;
    }
    return <code>{props.children}</code>;
  }

  renderMarkdown = () => {
    const schema = merge(sanitizeGhSchema, {
      attributes: { code: ["className"] }
    });
    const remarkOption = {
      sanitize: schema,
      remarkReactComponents: {
        h1: this.renderBlock("h1"),
        h2: this.renderBlock("h2"),
        h3: this.renderBlock("h3"),
        h4: this.renderBlock("h4"),
        h5: this.renderBlock("h5"),
        h6: this.renderBlock("h6"),
        p: this.renderBlock("p"),
        code: this.renderCode,
        pre: this.renderPre
      }
    };
    return remark()
      .use(remarkTextr, { plugins: [typographicBase] })
      .use(gemojiToEmoji)
      .use(remarkReact, remarkOption)
      .processSync(this.props.value).contents;
  };
  public render() {
    return <div className="renderer">{this.renderMarkdown()}</div>;
  }
}
