import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/index3.js";
import "firebase/auth";
import "../../../chunks/firebaseConfig.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="h-screen grid place-content-center">${validate_component(Button, "Button").$$render($$result, { size: "lg" }, {}, {
    default: () => {
      return `Log in`;
    }
  })}</main>`;
});
export {
  Page as default
};
