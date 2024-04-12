import { render } from "preact";
import { App } from "./App";
import { setUITheme, Theme } from "./lib/theme";
import "./main.scss";

render(<App />, document.getElementById("app")!);

setUITheme(Theme.LIGHT);
