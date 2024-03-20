import { reactive as s } from "vue";
const p = () => {
  const t = s({});
  return {
    tmplRefs: t,
    toTmplRef: (e) => (o) => t[e] = o
  };
};
export {
  p as default,
  p as useTmplRefs
};
