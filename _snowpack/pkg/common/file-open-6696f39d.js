// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var fileOpen = (async (e = {}) => new Promise((n, t) => {
  const o = document.createElement("input");
  o.type = "file";
  const i = [...(e.mimeTypes ? e.mimeTypes : []), e.extensions ? e.extensions : []].join();
  o.multiple = e.multiple || !1, o.accept = i || "";

  const r = () => {
    window.removeEventListener("pointermove", r), window.removeEventListener("pointerdown", r), window.removeEventListener("keydown", r), t(new DOMException("The user aborted a request.", "AbortError"));
  };

  window.addEventListener("pointermove", r), window.addEventListener("pointerdown", r), window.addEventListener("keydown", r), o.addEventListener("change", () => {
    window.removeEventListener("pointermove", r), window.removeEventListener("pointerdown", r), window.removeEventListener("keydown", r), n(o.multiple ? o.files : o.files[0]);
  }), o.click();
}));

export default fileOpen;