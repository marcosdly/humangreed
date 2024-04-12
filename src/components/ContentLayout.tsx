import { Component } from "preact";
import { CoreLayout } from "./CoreLayout";
import "./style/contentlayout.scss";

export class ContentLayout extends Component {
  render() {
    return (
      <div className={`contentlayout ${CoreLayout.containerClass}`}>
        {this.props.children}
      </div>
    );
  }
}
