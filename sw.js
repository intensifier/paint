if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,r,a)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return i;case"module":return o;default:return e(s)}})).then(e=>{const s=a(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-af7d0aae"],(function(e){"use strict";e.skipWaiting(),e.precacheAndRoute([{url:"styles.css",revision:"2349d151a833839647417e01e672129f"},{url:"index.html",revision:"e3927ac69f9f824f5f963c6755d17a6a"},{url:"actions/clear-image.js",revision:"9c2ec9f8694e3692b0801d978397b29c"},{url:"actions/clear-selection.js",revision:"35a126e153424728a89006c1347483be"},{url:"actions/color-box.js",revision:"c93f3e7b55713f517fa583332dde2eb4"},{url:"actions/copy-to.js",revision:"6400d2e8327c3dd46fb540e5cf3e9804"},{url:"actions/copy.js",revision:"889ed72fd88566cba466e964a7a0e2a5"},{url:"actions/cut.js",revision:"fa55dba23082941f95acb20156889544"},{url:"actions/draw-opaque.js",revision:"3d627555a891a3498344ffc5923d3fbd"},{url:"actions/get-colors.js",revision:"d24dce182c806b1045b0e5b5aeb8c3bb"},{url:"actions/invert-image.js",revision:"b401103ebf6e8936322581484b8522b9"},{url:"actions/new.js",revision:"8603fe9d0c5ab66d4a70a21e9e6427bd"},{url:"actions/open.js",revision:"6be525fe00c3dca2477b7bd493982e62"},{url:"actions/paste-from.js",revision:"08652a4b0fa870bf670108363b9f00a1"},{url:"actions/paste.js",revision:"4114214b61c8195459af07e41c7251a8"},{url:"actions/print.js",revision:"6a4d63b555f546c8a03439474d2b85fc"},{url:"actions/save-as.js",revision:"6c7b88c613f389f5eecd2aca4e47923a"},{url:"actions/save-colors.js",revision:"7c9da177af6612cf74ec935f10fb1a2b"},{url:"actions/save.js",revision:"a1a966c25a3aa83617bb66541e7b188a"},{url:"actions/select-all.js",revision:"5567741c2e8bada7985a02f4859f616e"},{url:"actions/send.js",revision:"92b958899392d5bf7a8830a187fed00b"},{url:"actions/status-bar.js",revision:"bdd2215e191694174d243cf03389bc28"},{url:"actions/tool-box.js",revision:"4278c6a9d6a1d88727f11c67df5bc788"},{url:"actions/view-bitmap.js",revision:"401b94dd035337f400e94f127f89625d"},{url:"elements/app.js",revision:"7389866278e244a77d5e548093a031de"},{url:"elements/canvas.js",revision:"8ac62f09de795cfce373370048fec33c"},{url:"elements/color-box.js",revision:"e2f5a11623df90f012067d042d639668"},{url:"elements/color-picker.js",revision:"91e27f3ae5741b0bf14b920dc23be1e7"},{url:"elements/color-switcher.js",revision:"c0f5199f85dc385bea0dc6835c0674b5"},{url:"elements/handle.js",revision:"a962a8feedb9bcbfb2f0ac11cf7305ae"},{url:"elements/index.js",revision:"91e4ca5a40dbcde1afab7b7c321833b8"},{url:"elements/inset-container.js",revision:"02d815a9f5a4ff72051bb01fbb15536d"},{url:"elements/menu-bar.js",revision:"f9e612ce81bf9614e676272c5e33f69d"},{url:"elements/menu-item.js",revision:"2e544c4ecbf0e95e2ee13f53f2534d27"},{url:"elements/menu.js",revision:"880b4f6d90ecb3e07fad8240a2db2d18"},{url:"elements/ruler.js",revision:"8807936ca45c67e038b80fbad8131d2c"},{url:"elements/status-bar.js",revision:"a10f268979aac0d7798997ede3dd0942"},{url:"elements/tool-bar.js",revision:"36eab9d062c2dccc12c080a31b66c0c2"},{url:"elements/tool-box.js",revision:"8c7a7cc627a9d6b85b9df2d1b699ea42"},{url:"elements/tool-color-preview.js",revision:"819c2b41e2c911e51d826facc32ace73"},{url:"elements/tool-draw-opaque.js",revision:"3cc5e2c9c32e107adf521038f5745dd4"},{url:"elements/tool-eraser-size.js",revision:"a7a26f3791a36184163bac7191fb1b9f"},{url:"elements/tool-fill-style.js",revision:"d7bf47efac9806d7b3a0f5253fa7a604"},{url:"elements/tool-line-width.js",revision:"73521d1a22d8a42efed7409d63420f3e"},{url:"elements/tool.js",revision:"2327d0ec5e670371a05232abc37bdc21"},{url:"helpers/get-blob-from-selection.js",revision:"16bec3017610e95845c3f6c2a7f11f16"},{url:"helpers/get-image-from-blob.js",revision:"b8c32ca578f81120741cb7f100422aaa"},{url:"helpers/register-sw.js",revision:"68c1f0821b9ceb5a2894660b917d6891"},{url:"helpers/update-context.js",revision:"ac5488706f72864fbe0cdb95eda42ea0"},{url:"menus/all.js",revision:"1da72ab5b140d4368f492fee7a958fed"},{url:"menus/edit.js",revision:"5b295dafaf61aa72fe01bffdef96206f"},{url:"menus/file.js",revision:"82477218261e929a53f1267556bd913b"},{url:"menus/help.js",revision:"3ba905c0017772a45d21da559e70434b"},{url:"menus/image.js",revision:"179d70cc06ddbaf491e30dafd1861333"},{url:"menus/options.js",revision:"2d510b3695b3e33f9ed2ee79271242e2"},{url:"menus/view.js",revision:"537728c9698cbf477dbf894fdca2b1cc"},{url:"tools/all.js",revision:"cd41f2ce3626bc34956fe67bbb32aac2"},{url:"tools/brush.js",revision:"8fbfaabe4a7e3e459d0a636f0512c60d"},{url:"tools/eraser.js",revision:"e850e4e4d5e2298e7f43317867457411"},{url:"tools/fill.js",revision:"feaf53477a34d5b954ead5669722c08e"},{url:"tools/line.js",revision:"4a6fc8a1cbbf585084cf84e410c47110"},{url:"tools/pencil.js",revision:"b084ef3baeeb953be2cc090d20d7afae"},{url:"tools/pick.js",revision:"8c5449c5dfa81f0d9bfe6b18911e66ad"},{url:"tools/rectangle.js",revision:"205f1dde464d2204e9bfa532e12815a3"},{url:"tools/select.js",revision:"367f6b2fa407446e2b46ba9ed7c76d19"},{url:"web_modules/bresenham-line.js",revision:"f3eee004b7acec6c5be1eeef3f7366fd"},{url:"web_modules/browser-nativefs.js",revision:"82225e04fcf3f9e00d99e1b4a9e97828"},{url:"web_modules/common/_commonjsHelpers-51a1c497.js",revision:"dae0f04e4dc8d08e5cd2d0b3699584f2"},{url:"web_modules/common/directory-open-legacy-8ad703f7.js",revision:"816372ee4795ffdb93af1842fc47b6f2"},{url:"web_modules/common/directory-open-nativefs-7ac98f26.js",revision:"91d96de461ab5395f2f9643c13306cda"},{url:"web_modules/common/file-open-legacy-37886591.js",revision:"436eea8d91464633a1f6e7196dbcbe35"},{url:"web_modules/common/file-open-nativefs-11792c03.js",revision:"7d0160f05bd6e354971122fdd0342723"},{url:"web_modules/common/file-save-legacy-df95654f.js",revision:"cfcf40db303e17225a904fbb685e301a"},{url:"web_modules/common/file-save-nativefs-b50a0318.js",revision:"fae89dfa12e73a38e168454c3b14aa2d"},{url:"web_modules/hotkeys-js.js",revision:"efe6753e1987c9331bda4737da130ede"},{url:"web_modules/lit-element.js",revision:"92a2d82ca6c36e317ec6dd9c2fd48730"},{url:"web_modules/q-floodfill.js",revision:"882fdf473348f7b206fe49e44de32779"},{url:"assets/icon.png",revision:"bfe25a47a2fe6269acb50ada061fbb84"},{url:"manifest.webmanifest",revision:"ca8b0223e22674e208cc3c224d172f9c"},{url:"favicon.ico",revision:"ea61015581df267459ed25a0dfd026ee"},{url:"3rdpartylicenses.txt",revision:"495048e8d0ba856e8589068964e8ca22"}],{})}));
