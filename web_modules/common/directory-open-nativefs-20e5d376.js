// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e=async(t,r,a=t.name)=>{const i=[],n=[];for await(const o of t.values()){const t=`${a}/${o.name}`;"file"===o.kind?n.push(o.getFile().then(e=>Object.defineProperty(e,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>t}))):"directory"===o.kind&&r&&i.push(e(o,r,t));}return [...(await Promise.all(i)).flat(),...await Promise.all(n)]};var directoryOpenNativefs = async(t={})=>{t.recursive=t.recursive||!1;const r=await window.showDirectoryPicker();return e(r,t.recursive)};

export default directoryOpenNativefs;
