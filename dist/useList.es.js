import u from "./useForm.es.js";
import { onMounted as i } from "vue";
function d(e) {
  const a = u({
    initialValues: e.defaultValue,
    submitOnChange: !0,
    onUpdate: (n) => {
      var t;
      n !== "page" && a.inputChangeHandler(1, "page"), (t = e.onUpdate) == null || t.call(e, n);
    },
    onSubmit: e.onSubmit
  });
  return i(() => {
    a.setValues(e.getInitialValue());
  }), {
    form: a,
    tableSortHandler: (n) => {
      a.inputChangeHandler(n, "sorting");
    },
    pageChangeHandler: (n) => {
      a.inputChangeHandler(n, "page");
    }
  };
}
export {
  d as default
};
