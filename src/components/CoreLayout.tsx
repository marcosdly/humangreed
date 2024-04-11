import { Component } from "preact";
import { Horizontal1, Vertical1, Vertical2 } from "./Advertisement";

export class CoreLayout extends Component {
  containerClass = "container-sm";
  containerClassWidth = 576;

  mobileState: boolean;

  constructor() {
    super();
    this.mobileState = this.isMobile();
    window.onresize = () => this.windowOnResize();
  }

  windowOnResize() {
    const state = this.isMobile();
    if (state === this.mobileState) return;
    this.mobileState = state;
    this.forceUpdate();
  }

  isMobile(): boolean {
    const vw = Math.min(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
    return vw <= this.containerClassWidth;
  }

  render() {
    return (
      <div className="corelayout">
        {!this.mobileState ? Vertical1 : undefined}
        {this.props.children}
        {!this.mobileState ? Vertical2 : undefined}
        {this.mobileState ? Horizontal1 : undefined}
      </div>
    );
  }
}
