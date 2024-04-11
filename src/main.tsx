import { render } from "preact";
import { App } from "./App";
import { setUITheme, Theme } from "./lib/theme";

render(<App />, document.getElementById("app")!);

setUITheme(Theme.LIGHT);
