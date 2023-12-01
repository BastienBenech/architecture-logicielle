import van from "../van-1.2.6.min.js";
const { div, button, h1 } = van.tags;

export const StarterScreen = () => {
  return div(h1("Welcome to Van!"), button("Click me!"));
};

export default StarterScreen;
