import * as React from "react";
import { ItemTimeline } from "../molecules/ItemTimeline";

export interface TimelineProps {}

export class Timeline extends React.Component<TimelineProps, {}> {
  public render() {
    return (
      <div>
        {[0, 1, 2, 3].map(index => (
          <ItemTimeline
            key={index}
            title={"Cara cepat koding yang bagus!"}
            description={
              "Gunakanlah microsoft word sebagai IDE utamamu! dan printer sebagai compilernya"
            }
            cover={
              index % 2 === 0 ? "https://placeimg.com/140/120/tech" : undefined
            }
          />
        ))}
      </div>
    );
  }
}
