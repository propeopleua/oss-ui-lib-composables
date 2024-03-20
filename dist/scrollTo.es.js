function l(o) {
  window.scrollTo({
    top: o - 200 + window.scrollY,
    behavior: "smooth"
  });
}
export {
  l as default,
  l as scrollTo
};
