import { c as create_ssr_component, a as validate_store, b as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/index3.js";
import "dequal";
import "clsx";
import { I as Icon } from "../../../../chunks/Icon.js";
import "wavesurfer.js";
import "wavesurfer.js/plugins/record";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/firebaseConfig.js";
import "firebase/firestore";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<main><div id="waveform" class="grid h-auto p-2 m-5 rounded-sm border-2 border-primary-500">${`<span class="h-32 mx-auto text-2xl text-primary align-middle" data-svelte-h="svelte-1ts28hw">Say something.</span>`}</div> <div class="grid justify-items-center">${``} ${`${`${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      class: "border-primary h-auto w-20  rounded-full"
    },
    {},
    {
      default: () => {
        return `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            class: "text-5xl text-primary",
            icon: "et:mic"
          },
          {},
          {}
        )}`;
      }
    }
  )}`}`}</div></main>`;
});
export {
  Page as default
};
