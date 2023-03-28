import{_ as c}from"./preload-helper-87151e19.mjs";import{u}from"./useAdUnitPatterns-f87d2d88.mjs";import{b as h,c as f}from"./WebPageContent-8cf5c859.mjs";import{u as m}from"./useGAMNativeAd-0867bbbe.mjs";import{_}from"./GAMController-32f716ac.mjs";import{_ as y,i as v,l as r,m as d,F as A,D as g,E as L,p,J as k}from"./_plugin-vue_export-helper-15c97ded.mjs";import"./app.config-2d714cad.mjs";import"./index-e5521a99.mjs";import"./state-171775be.mjs";import"./AdminPageTitle-59a2224c.mjs";import"./IconElement-b96dcc23.mjs";import"./client-only-91773298.mjs";import"./runtime-dom.esm-bundler-f8204f67.mjs";import"./cookie-ba326bc4.mjs";import"./useAdminStyles-191b9c4f.mjs";import"./useCmsUser-0ed98f87.mjs";import"./useWindowDimensions-9d7c55cb.mjs";import"./WebButtonElement-69a134e8.mjs";import"./composables-7a63e89a.mjs";import"./useSiteUser-3754f9ab.mjs";import"./useToast-49717dcc.mjs";import"./_commonjsHelpers-87174ba5.mjs";import"./vue.runtime.esm-bundler-bae60989.mjs";import"./vue-router-216c064a.mjs";import"./useSupportedContentTypes-e7642151.mjs";import"./content_types-44470a40.mjs";import"./useUUID-f02a73c2.mjs";import"./useContainerPixelWidth-7c0e786a.mjs";const S=k(()=>c(()=>import("./GAMSlotBuilder-99006dae.mjs"),["./GAMSlotBuilder-99006dae.mjs","./preload-helper-87151e19.mjs","./useUUID-f02a73c2.mjs","./useGAMNativeAd-0867bbbe.mjs","./app.config-2d714cad.mjs","./index-e5521a99.mjs","./_plugin-vue_export-helper-15c97ded.mjs","./state-171775be.mjs"],import.meta.url).then(e=>e.default||e)),w={extends:_,props:{pageLevel:{type:String,required:!0,validator:e=>["top","secondary","none"].includes(e)}},emits:["slotRendered"],setup(){return{page:v("page")}},computed:{adUnits(){if(this.pageLevel==="none")return[];const e=({type:o})=>this.$constants.PAGE_AD_TYPES.includes(o),t=({loadOnSecondaryPage:o})=>{if(this.pageLevel==="top")return!0;if(this.pageLevel==="secondary")return o};return u().value.filter(e).filter(t)}},created(){var t,o;const e=this.adUnits.filter(a=>a.key==="wa");(!e[0]||!this.valid(e[0]))&&this.slotRendered(((t=e[0])==null?void 0:t.name)??"WA",((o=e[0])==null?void 0:o.key)??"wa")},mounted(){window.addEventListener("message",this.onMessage)},unmounted(){window.removeEventListener("message",this.onMessage)},methods:{onMessage({data:e}){if(typeof e=="string")try{const t=JSON.parse(e);"adSkinType"in t?h.add(t):(t==null?void 0:t.adType)==="welcomeAdImage"||(t==null?void 0:t.adType)==="welcomeAdTag"?f.update(t):"nativeTitle"in t&&(this.adUnits.some(i=>i.type==="content-list-native"&&this.valid(i))&&m.addNativeListItem(t),this.adUnits.some(i=>i.type==="content-body-native"&&this.valid(i))&&m.addNativeBody(t))}catch{}},valid(e){return e&&this.gamBasePath&&this.gamAccountId&&((e==null?void 0:e.type)==="layout-block"||this.allowedOnPage(e))},slotRendered(e,t){this.$emit("slotRendered",e,t)}}},P={key:0};function T(e,t,o,a,i,n){const l=S;return o.pageLevel!=="none"?(r(),d("div",P,[(r(!0),d(A,null,g(n.adUnits,s=>(r(),d("div",{key:s.id},[n.valid(s)?(r(),L(l,{key:0,"container-pixel-width":0,"ad-unit":s,path:e.makePath(s),onIframeLoaded:e.onLoad,onSlotRendered:n.slotRendered},null,8,["ad-unit","path","onIframeLoaded","onSlotRendered"])):p("",!0)]))),128))])):p("",!0)}const te=y(w,[["render",T]]);export{te as default};
