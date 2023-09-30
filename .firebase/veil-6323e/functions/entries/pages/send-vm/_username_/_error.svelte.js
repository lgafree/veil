import { c as create_ssr_component, a as validate_store, b as subscribe, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<main class="flex items-center p-5"><p class="font-black text-5xl text-primary">${escape($page.error.message)}</p></main>`;
});
export {
  Error as default
};
