(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[580],{6991:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CountUp:()=>r});var n=function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=function(){function e(e,t,i){var r=this;this.endVal=t,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(e){r.startTime||(r.startTime=e);var t=e-r.startTime;r.remaining=r.duration-t,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(t,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(t,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(t/r.duration);var i=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=i?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),t<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(e){var t,i,n,s=(Math.abs(e).toFixed(r.options.decimalPlaces)+"").split(".");if(t=s[0],i=s.length>1?r.options.decimal+s[1]:"",r.options.useGrouping){n="";for(var o=3,a=0,l=0,u=t.length;l<u;++l)r.options.useIndianSeparators&&4===l&&(o=2,a=1),0!==l&&a%o==0&&(n=r.options.separator+n),a++,n=t[u-l-1]+n;t=n}return r.options.numerals&&r.options.numerals.length&&(t=t.replace(/[0-9]/g,function(e){return r.options.numerals[+e]}),i=i.replace(/[0-9]/g,function(e){return r.options.numerals[+e]})),(e<0?"-":"")+r.options.prefix+t+i+r.options.suffix},this.easeOutExpo=function(e,t,i,n){return i*(1-Math.pow(2,-10*e/n))*1024/1023+t},this.options=n(n({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(t),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof e?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return r.handleScroll(r)}),window.onscroll=function(){window.onScrollFns.forEach(function(e){return e()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(e){if(e&&window&&!e.once){var t=window.innerHeight+window.scrollY,i=e.el.getBoundingClientRect(),n=i.top+window.pageYOffset,r=i.top+i.height+window.pageYOffset;r<t&&r>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>r||n>t)&&!e.paused&&e.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;if(this.countDown=this.startVal>e,Math.abs(e-this.startVal)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(e){var t;if(this.el){var i=this.formattingFn(e);(null===(t=this.options.plugin)||void 0===t?void 0:t.render)?this.options.plugin.render(this.el,i):"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i}},e.prototype.ensureNumber=function(e){return"number"==typeof e&&!isNaN(e)},e.prototype.validateValue=function(e){var t=Number(e);return this.ensureNumber(t)?t:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}()},6526:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=i(7677),r=i(544),s=i(4848),o=r._(i(6540)),a=n._(i(961)),l=n._(i(6085)),u=i(7282),d=i(2105),c=i(9641);i(7679);let f=i(7644),h=n._(i(5472)),p=i(1903),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/signal-light/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,i,n,r,s,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function v(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}let w=(0,o.forwardRef)((e,t)=>{let{src:i,srcSet:n,sizes:r,height:a,width:l,decoding:u,className:d,style:c,fetchPriority:f,placeholder:h,loading:m,unoptimized:w,fill:b,onLoadRef:y,onLoadingCompleteRef:V,setBlurComplete:S,setShowAltText:E,sizesInput:x,onLoad:j,onError:C,..._}=e,O=(0,o.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&g(e,h,y,V,S,w,x))},[i,h,y,V,S,C,w,x]),P=(0,p.useMergedRef)(t,O);return(0,s.jsx)("img",{..._,...v(f),loading:m,width:l,height:a,decoding:u,"data-nimg":b?"fill":"1",className:d,style:c,sizes:r,srcSet:n,src:i,ref:P,onLoad:e=>{g(e.currentTarget,h,y,V,S,w,x)},onError:e=>{E(!0),"empty"!==h&&S(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:i}=e,n={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...v(i.fetchPriority)};return t&&a.default.preload?(a.default.preload(i.src,n),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...n},"__nimg-"+i.src+i.srcSet+i.sizes)})}let y=(0,o.forwardRef)((e,t)=>{let i=(0,o.useContext)(f.RouterContext),n=(0,o.useContext)(c.ImageConfigContext),r=(0,o.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[n]),{onLoad:a,onLoadingComplete:l}=e,p=(0,o.useRef)(a);(0,o.useEffect)(()=>{p.current=a},[a]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[v,y]=(0,o.useState)(!1),[V,S]=(0,o.useState)(!1),{props:E,meta:x}=(0,u.getImgProps)(e,{defaultLoader:h.default,imgConf:r,blurComplete:v,showAltText:V});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{...E,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:p,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:S,sizesInput:e.sizes,ref:t}),x.priority?(0,s.jsx)(b,{isAppRouter:!i,imgAttributes:E}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return r}});let n=i(6540);function r(e,t){let i=(0,n.useRef)(()=>{}),r=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(i.current(),r.current()):(i.current=s(e,n),r.current=s(t,n))}:e||t,[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7282:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),i(7679);let n=i(9197),r=i(2105);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var i;let a,l,u,{src:d,sizes:c,unoptimized:f=!1,priority:h=!1,loading:p,className:m,quality:g,width:v,height:w,fill:b=!1,style:y,overrideSrc:V,onLoad:S,onLoadingComplete:E,placeholder:x="empty",blurDataURL:j,fetchPriority:C,decoding:_="async",layout:O,objectFit:P,objectPosition:F,lazyBoundary:z,lazyRoot:A,...M}=e,{imgConf:D,showAltText:R,blurComplete:N,defaultLoader:I}=t,k=D||r.imageConfigDefault;if("allSizes"in k)a=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);a={...k,allSizes:e,deviceSizes:t}}if(void 0===I)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let T=M.loader||I;delete M.loader,delete M.srcSet;let G="__next_img_default"in T;if(G){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:i,...n}=t;return e(n)}}if(O){"fill"===O&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!c&&(c=t)}let B="",L=o(v),U=o(w);if((i=d)&&"object"==typeof i&&(s(i)||void 0!==i.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,j=j||e.blurDataURL,B=e.src,!b){if(L||U){if(L&&!U){let t=L/e.width;U=Math.round(e.height*t)}else if(!L&&U){let t=U/e.height;L=Math.round(e.width*t)}}else L=e.width,U=e.height}}let Y=!h&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:B)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,Y=!1),a.unoptimized&&(f=!0),G&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0);let q=o(g),W=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:F}:{},R?{}:{color:"transparent"},y),H=N||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:L,heightInt:U,blurWidth:l,blurHeight:u,blurDataURL:j||"",objectFit:W.objectFit})+'")':'url("'+x+'")',J=H?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:H}:{},$=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:s,sizes:o,loader:a}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))],kind:"x"}}(t,r,o),d=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((e,n)=>a({config:t,src:i,quality:s,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:i,quality:s,width:l[d]})}}({config:a,src:d,unoptimized:f,width:L,quality:q,sizes:c,loader:T});return{props:{...M,loading:Y?"lazy":p,fetchPriority:C,width:L,height:U,decoding:_,className:m,style:{...W,...J},sizes:$.sizes,srcSet:$.srcSet,src:V||$.src},meta:{unoptimized:f,priority:h,placeholder:x,fill:b}}}},9197:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:s,objectFit:o}=e,a=n?40*n:t,l=r?40*r:i,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},2364:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return a}});let n=i(7677),r=i(7282),s=i(6526),o=n._(i(5472));function a(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/signal-light/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=s.Image},5472:(e,t)=>{"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),i.__next_img_default=!0;let n=i},9965:(e,t,i)=>{e.exports=i(2364)},4856:(e,t,i)=>{"use strict";var n=i(6540),r=i(6991);function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}var o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect}}]);