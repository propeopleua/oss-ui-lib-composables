import { ref as i } from "vue";
function c() {
  const e = i(!1);
  return {
    isUpsideDown: e,
    checkUpsideDown: (n) => {
      const o = window.innerHeight / 2;
      e.value = n.y > o;
    }
  };
}
export {
  c as default
};
