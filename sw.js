if(!self.define){let e,s={};const i=(i,d)=>(i=new URL(i+".js",d).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>i(e,a),n={module:{uri:a},exports:c,require:o};s[a]=Promise.all(d.map((e=>n[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-791ba835"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"_snowpack/env.js",revision:"271340c8a4138e1e23f57808561235d0"},{url:"_snowpack/pkg/break-styled-lines.js",revision:"0c13e3c4dd75e1ceee1a36f7c4e7c386"},{url:"_snowpack/pkg/bresenham-zingl.js",revision:"7041f3997351c03822facbd286d22c39"},{url:"_snowpack/pkg/browser-fs-access.js",revision:"e76c031cef9c61c85371554211f23b0e"},{url:"_snowpack/pkg/common/directory-open-6c40f0c6.js",revision:"051f8a1835d879d4c3266626c854a665"},{url:"_snowpack/pkg/common/directory-open-d1a4dc33.js",revision:"f5a7839f7dbd93549bfe1124002c4984"},{url:"_snowpack/pkg/common/file-open-592476ae.js",revision:"6ad7bb531f7cfccfb011e22ce57018fb"},{url:"_snowpack/pkg/common/file-open-64974bc8.js",revision:"27b9ef19fa809ac5bc9349d2459bc603"},{url:"_snowpack/pkg/common/file-save-84fd15c1.js",revision:"143d9717808d22dae719ff342a519d16"},{url:"_snowpack/pkg/common/file-save-cd2cc3cb.js",revision:"1e3e2dfeaae9ddc64782c1b9690a0eee"},{url:"_snowpack/pkg/hotkeys-js.js",revision:"ba16943165ff0817e496a580a0f5a4b1"},{url:"_snowpack/pkg/import-map.json",revision:"27b73a42b6c89cd9f6a05d365d23418c"},{url:"_snowpack/pkg/lit.js",revision:"2e986666f6109e9169d6f1ea1f122ad6"},{url:"_snowpack/pkg/lit/decorators.js",revision:"a42caf7354e334227eddb5c2ea022a62"},{url:"_snowpack/pkg/q-floodfill.js",revision:"1f6bc5876fb8aa7fefc5437947258fb3"},{url:"3rdpartylicenses.txt",revision:"09eb8274c89d01b046ca02158bf8fa73"},{url:"assets/apple-touch-icon.png",revision:"43e60f8723acd485c7a23f04ebeb9754"},{url:"assets/icon.png",revision:"6401a7111b0b39f29448b74969487757"},{url:"dist/data/colors.js",revision:"81ada2e32d96f2483239d916cd247301"},{url:"dist/data/drawing-context.js",revision:"c48e07779ef3360c8601f4e53e77925e"},{url:"dist/data/font-sizes.js",revision:"eaa11da04a0c6ebfa0ac00fe5cd62992"},{url:"dist/data/fonts.js",revision:"1789d1a5796fff02649c6a089d96b232"},{url:"dist/elements/app.js",revision:"96ecf2b1d5ce7cf6d6b51d28895c5cc8"},{url:"dist/elements/button.js",revision:"c31247c7b9fc15ba26c8ce7c44ef871b"},{url:"dist/elements/canvas.js",revision:"a5bb2e857c2ed0f289f1beb3f12f58ae"},{url:"dist/elements/color-box.js",revision:"bef3f606b33f09ba7757141afac75cbc"},{url:"dist/elements/color-picker.js",revision:"af056fceb49f2d831911433a2ac4db72"},{url:"dist/elements/color-switcher.js",revision:"c717a06c3d7cd7fb0836e42201057f3f"},{url:"dist/elements/dialogs/about.js",revision:"fc39ef35dd5fcf77cc63ad8eb468a474"},{url:"dist/elements/dialogs/attributes.js",revision:"66b07b00e997429e159da1bf7c914df8"},{url:"dist/elements/dialogs/custom-zoom.js",revision:"cea144e86fc044439f0e46c71f0f1d1c"},{url:"dist/elements/dialogs/flip-and-rotate.js",revision:"b038e443340414cd64b630ad5fc21998"},{url:"dist/elements/dialogs/message-box.js",revision:"05191969992b523fd45b68ebd82d286c"},{url:"dist/elements/dialogs/text-toolbar.js",revision:"5526831851073dcb6aa28354aeba8298"},{url:"dist/elements/handle.js",revision:"633bef73d5c406f3498974a85c46ebdd"},{url:"dist/elements/index.js",revision:"a782027528a0e8f27ebdb3de44185293"},{url:"dist/elements/inset-container.js",revision:"cc78e3e1dfc024936904a53021bcf779"},{url:"dist/elements/menu-bar.js",revision:"ef73dc22d1dcfa454cba2a44023a7ad0"},{url:"dist/elements/menu.js",revision:"7094875a7def464b5c302ac1283bce01"},{url:"dist/elements/ruler.js",revision:"e751a6cef0a6221ab8b2264c6b471441"},{url:"dist/elements/select-box.js",revision:"bbba94a0fd5f38667388d5025ab956ba"},{url:"dist/elements/status-bar.js",revision:"65b2c6705d53a3028415e5f86bf335dd"},{url:"dist/elements/text-area.js",revision:"4734027c0657d378b68c89f21064bf40"},{url:"dist/elements/tool-airbrush.js",revision:"46f6ea0e092c5b5f439c372dd085b627"},{url:"dist/elements/tool-bar.js",revision:"a1ceccca76f5e911f6afbaa46ccedc0f"},{url:"dist/elements/tool-box.js",revision:"b8699a7e19bdfbf982b4600855f361d0"},{url:"dist/elements/tool-brush.js",revision:"76440e15a592d23cd607bb57599588c8"},{url:"dist/elements/tool-color-preview.js",revision:"e732ba15bc56a24cff0679dd43cc9aeb"},{url:"dist/elements/tool-draw-opaque.js",revision:"02b66633a3cc8a73da62cb57eafdcbcb"},{url:"dist/elements/tool-eraser-size.js",revision:"035284b634b0f97edd5f7f8a879ed475"},{url:"dist/elements/tool-fill-style.js",revision:"8ac35c3a387063adb494272ecb901c43"},{url:"dist/elements/tool-line-width.js",revision:"b3d9bd4ce5fa5f17645a2274a63fede8"},{url:"dist/elements/tool.js",revision:"4bdf58a68b5a7c4fefca637d7dabf9bc"},{url:"dist/elements/window/title-bar-button.js",revision:"331f504963b221d54435943819d76e73"},{url:"dist/elements/window/window.js",revision:"790a54e7e9bdbcc779dbc89d644a41ce"},{url:"dist/helpers/bind-to-document-title.js",revision:"a04838ef372f44386b852321830a50cf"},{url:"dist/helpers/clear-canvas.js",revision:"d80067eb180c64e653602861aae519b5"},{url:"dist/helpers/clear-context.js",revision:"2fd2a98dbab9006868075cda52dee603"},{url:"dist/helpers/deselect-text-tool-when-zoomed-in.js",revision:"91f1a2021345e1582b83655b8143c069"},{url:"dist/helpers/dialog.js",revision:"ce48b5f0dd8bedb5396e54e404c8a0ce"},{url:"dist/helpers/dispatch-area-event.js",revision:"ac3ff42b680ef5312ec88c664c1f5d14"},{url:"dist/helpers/draw-area-rectangle.js",revision:"85590675350e59a7a0566b9437ace65c"},{url:"dist/helpers/draw-circle.js",revision:"c8d21e4237e83682b94319735681d4de"},{url:"dist/helpers/evaluate-text-toolbar-visibility.js",revision:"f00c3526fa33016f4e4c7233abb8097e"},{url:"dist/helpers/file-handling-api.js",revision:"b0cefd08a3068253f753e45e0b93fc64"},{url:"dist/helpers/fill-ellipse.js",revision:"f68b0cdccb27c73169036cb416f7685e"},{url:"dist/helpers/font-cache.js",revision:"d00ac42475fc84010159fdcffdbeb2d3"},{url:"dist/helpers/get-blob-from-selection.js",revision:"d2063f093d02d79e0280958a6754e59c"},{url:"dist/helpers/get-image-from-blob.js",revision:"a762d1c2cc2e85ef785576440ea970f0"},{url:"dist/helpers/handle-unsaved-changes.js",revision:"75cc3b31e06224eb62b85eebb53d536f"},{url:"dist/helpers/history.js",revision:"b8b970d5a81624dddca9beb40ed801c9"},{url:"dist/helpers/load-file-and-adjust-canvas.js",revision:"490d25ccac8a2fff2be657ab0a3e5f87"},{url:"dist/helpers/message-box.js",revision:"54badce3bfebf689d0eb4bc33bef7dbb"},{url:"dist/helpers/normalize-hotkey.js",revision:"be5c17a2133bffa635446e2416c4adb5"},{url:"dist/helpers/register-drag-drop.js",revision:"14bfa3a1b537d1d37edb0e9ca510c4d3"},{url:"dist/helpers/register-sw.js",revision:"a8421a03e923d1bee8137909b15c3881"},{url:"dist/helpers/render-mnemonic.js",revision:"5689f18958fcc8242b5295789ce66c38"},{url:"dist/helpers/to-blob.js",revision:"2c27ebb73c5a365562d20624b4257884"},{url:"dist/helpers/update-context.js",revision:"838a355ca42d3728f154ec94fff1ea01"},{url:"dist/helpers/update-document-context.js",revision:"f8df3c40ce2bd12d681fd3f7f3416ab9"},{url:"dist/index.js",revision:"b48444c167b51fc7ed38c2c4167d537f"},{url:"dist/menus/all.js",revision:"5a96b937ff1e91c040c6af665f887476"},{url:"dist/menus/edit/clear-selection.js",revision:"8291a6f725cecd436ca7e5aa4f7067fd"},{url:"dist/menus/edit/copy-to.js",revision:"3b6f70ad9ba46863bd3f0060f8944871"},{url:"dist/menus/edit/copy.js",revision:"20442a994692c7d2dc5817dab53950bb"},{url:"dist/menus/edit/cut.js",revision:"413254c4abeb59fcdab618190743688a"},{url:"dist/menus/edit/index.js",revision:"28f420a063ea24674e4658cce83919ab"},{url:"dist/menus/edit/paste-from.js",revision:"80e206bbfcc4d5938853cfd5183c07de"},{url:"dist/menus/edit/paste.js",revision:"af60ae5c3325d4029e2fc303a607e86e"},{url:"dist/menus/edit/redo.js",revision:"a6d81135194a4e31879d188f7b8539e1"},{url:"dist/menus/edit/select-all.js",revision:"bb009323fc57e2400f2ef6f156d65365"},{url:"dist/menus/edit/undo.js",revision:"8689936629f2316464ce14a63c6bd8ae"},{url:"dist/menus/file/exit.js",revision:"2978107a508e65bf4c831f5022ea16bd"},{url:"dist/menus/file/index.js",revision:"10bcef0716173857c7261c00d7f53850"},{url:"dist/menus/file/new.js",revision:"5b060a0b06fddac78488916cb910da12"},{url:"dist/menus/file/open.js",revision:"edfab2ac8efb2c70baeb10d74a1efef4"},{url:"dist/menus/file/print.js",revision:"1e3bb05fe2ee2b2abf72a8ddf8c7f3fe"},{url:"dist/menus/file/save-as.js",revision:"d2d0fbf616db50b4793fb63070c12003"},{url:"dist/menus/file/save.js",revision:"9e7bb651a3993a46e3f0c3ba9f99192b"},{url:"dist/menus/file/send.js",revision:"8c8a54bcf26679f8be54fb97924a113f"},{url:"dist/menus/help/about.js",revision:"a023c8de1eeccfcef5bcd07310ae389b"},{url:"dist/menus/help/index.js",revision:"f8a8073425278016891aafa3b1f68ecb"},{url:"dist/menus/image/attributes.js",revision:"9d59ddbc5387ccaad5d0fb7849e0fb3f"},{url:"dist/menus/image/clear-image.js",revision:"5b72a892ece85dacf4c1bea4663a0d35"},{url:"dist/menus/image/flip-rotate.js",revision:"8b6b7f4091dc9fb95fd2a55aac4b21f8"},{url:"dist/menus/image/index.js",revision:"1343b9b6c071f8c5f6d60538c13852aa"},{url:"dist/menus/image/invert-image.js",revision:"278cf9c49099245971c46d7ef41d6911"},{url:"dist/menus/options/draw-opaque.js",revision:"31c941d14d7111b13bbd2307a79c9231"},{url:"dist/menus/options/get-colors.js",revision:"1de8cc045d2710ed24548a37b5d77483"},{url:"dist/menus/options/index.js",revision:"951fa956b4e85e507ebafd7e69d98ddc"},{url:"dist/menus/options/save-colors.js",revision:"b4effcbc376c4c24193726f4643739c3"},{url:"dist/menus/view/color-box.js",revision:"02da3ad09f5a98477ed8f10a6f09579e"},{url:"dist/menus/view/custom.js",revision:"01a771cb9c16a227896c6c116e68af31"},{url:"dist/menus/view/index.js",revision:"96a1307fc63914bf995eb67b7ed4e752"},{url:"dist/menus/view/large-size.js",revision:"4f696865482153c53ad5418508f1eb0f"},{url:"dist/menus/view/normal-size.js",revision:"c20b801fd60a3a617911987a1760fbe1"},{url:"dist/menus/view/status-bar.js",revision:"728106e5bc6e325b8ccfa1ee103a27ea"},{url:"dist/menus/view/text-toolbar.js",revision:"bf0b259effba7f690d581c7fa86817c4"},{url:"dist/menus/view/tool-box.js",revision:"b38f0d80e20beb438339db31292bc3e7"},{url:"dist/menus/view/view-bitmap.js",revision:"a5b27b1404f5cf9e3935b070d5fe1a8a"},{url:"dist/models/brush.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/drawing-context.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/fill-style.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/menu-action.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/menu.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/point.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/pointer-position.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/selection.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/text-context.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/tool-definition.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/models/tool.js",revision:"91b4572f6415d230e896e1d652db0106"},{url:"dist/tools/airbrush.js",revision:"9cceebbe33720d8e2fbeaae3c4289dd4"},{url:"dist/tools/all.js",revision:"2f78b651f63fa3a1aca21ccc94ccceca"},{url:"dist/tools/brush.js",revision:"769aa6d2e43a188b73f157ddef26c094"},{url:"dist/tools/ellipse.js",revision:"f6193d0f2ead290e069ce26347aa3e24"},{url:"dist/tools/eraser.js",revision:"814f70eadd8a97e8c44639fcee22df68"},{url:"dist/tools/fill.js",revision:"c13230f072da1682d50f0d9483d6ad76"},{url:"dist/tools/line.js",revision:"866111e4afa9c1f0f7a13f8a0802ed46"},{url:"dist/tools/pencil.js",revision:"562a461be9cc287b8de3d78b105a3119"},{url:"dist/tools/pick.js",revision:"7d0fcdf453b43313f6b448b28e1f7a34"},{url:"dist/tools/rectangle.js",revision:"ea90e7c9a18a8e7c35a8416f15e2800c"},{url:"dist/tools/select.js",revision:"9f32a40eb0142c3e8d165b2aff123852"},{url:"dist/tools/text.js",revision:"78b81f7f1df754bfe8ca62d0c5c39035"},{url:"favicon.ico",revision:"0e809cc049c23b8d405a2886b8f1a23e"},{url:"index.html",revision:"aa97ad6a7ca3d28e37084669b41d358f"},{url:"manifest.webmanifest",revision:"17801e73089eddd79b11bd8d14c3e946"},{url:"styles.css",revision:"66b72233258e473671c57c822f810400"}],{})}));
