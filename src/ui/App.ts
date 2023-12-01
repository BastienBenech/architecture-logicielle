import type { Van } from "../van-1.2.6.min.d.ts";
declare const van: Van;

import { StarterScreen } from "./starter-screen.ts";

export const UiApp = van.add(document.body, StarterScreen());
