function b(t) {
  return t === null;
}
function c(t, f = "", p = new FormData()) {
  return Object.entries(t).reduce((n, [i, e]) => {
    const o = f.length ? `${f}[${i}]` : i;
    if (b(e))
      return n;
    if (e instanceof Array || e instanceof FileList)
      for (const [s, r] of Object.entries(Array.from(e)))
        r instanceof File || typeof r != "object" ? n.append(`${o}[${s}]`, r) : c(r, `${o}[${s}]`, n);
    else
      e instanceof File ? n.append(o, e) : typeof e == "boolean" ? n.append(o, Number(e)) : typeof e == "object" ? c(e, o, n) : n.append(o, e);
    return n;
  }, p);
}
export {
  c as default
};
