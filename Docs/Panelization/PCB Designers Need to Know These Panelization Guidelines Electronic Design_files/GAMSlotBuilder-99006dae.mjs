import{_ as u}from"./preload-helper-87151e19.mjs";import{u as f}from"./useUUID-f02a73c2.mjs";import{u as m}from"./useGAMNativeAd-0867bbbe.mjs";import{_ as h,l as p,E as g,p as b,J as v}from"./_plugin-vue_export-helper-15c97ded.mjs";import"./app.config-2d714cad.mjs";import"./index-e5521a99.mjs";import"./state-171775be.mjs";const _=v(()=>u(()=>import("./GAMSlotTarget-96bbbc97.mjs"),["./GAMSlotTarget-96bbbc97.mjs","./client-only-91773298.mjs","./_plugin-vue_export-helper-15c97ded.mjs","./GAMSlotTarget.4b00aa8c.css"],import.meta.url).then(e=>e.default||e)),y={props:{adUnit:{type:Object},containerPixelWidth:{type:Number},path:{type:String,required:!0},useAdUnitTargetId:{type:Boolean,default:!1},renderTarget:{type:Boolean,default:!0}},emits:["iframeLoaded","slotRendered","visible"],data(){return{refresh:void 0,visibility:0}},computed:{valid(){return!!this.adUnit}},created(){this.targetId=this.useAdUnitTargetId?this.adUnit.targetId:"gam-"+f()},async mounted(){this.valid&&(await this.$nextTick(),this.defineSlot())},beforeUnmount(){this.refresh&&clearTimeout(this.refresh)},methods:{async defineSlot(){let e,i=500,s=5;for(;!e;){const t=window==null?void 0:window.googletag;if(t&&document.getElementById(this.targetId)){const{sizeMapping:o,size:n}=this.adUnit,{path:a,targetId:c}=this;t.cmd.push(function(){if(e=t.defineSlot(a,n??[[1,1]],c),o){let r=t.sizeMapping();for(const{viewport:d,size:l}of o)r=r.addSize(d,l);e=e.defineSizeMapping(r.build())}e=e.setCollapseEmptyDiv(!0),e.addService(t.pubads()),t.display(e)}),t.cmd.push(()=>{t.pubads().addEventListener("slotVisibilityChanged",r=>{const{slot:d,inViewPercentage:l}=r;d.getSlotId().getDomId()===c&&(this.visibility=l)}),t.pubads().addEventListener("slotRenderEnded",r=>{const{slot:d}=r,l=d.getSlotId().getDomId();window.setTimeout(()=>this.$emit("slotRendered",this.adUnit.name,this.adUnit.key),100),l===c&&this.adUnit.type==="content-list-native"&&window.setTimeout(()=>{m.completeNativeList()},500)})})}if(await new Promise(o=>setTimeout(o,i)),i+=500,s--===0)break}e&&this.adUnit.refreshRate&&this.setRefresh(e)},setRefresh(e){const{googletag:i}=window;this.refresh=setTimeout(()=>{this.visibility>75&&i.cmd.push(function(){i.pubads().refresh([e])}),this.setRefresh(e)},1e3*this.adUnit.refreshRate)},observe(e){if(!window.MutationObserver){this.loaded=!0,this.$emit("iframeLoaded");return}const i=o=>{for(const{addedNodes:n}of o)for(const a of n)a.tagName==="IFRAME"&&(this.loaded=!0,this.$emit("iframeLoaded"))},s=new MutationObserver(i),t={attributes:!1,childList:!0,subtree:!0};s.observe(e,t),setTimeout(()=>{s&&s.disconnect()},10*1e3)},visible(){this.$emit("visible")}}};function w(e,i,s,t,o,n){const a=_;return n.valid&&s.renderTarget?(p(),g(a,{key:0,"target-id":e.targetId,observe:n.observe,"container-pixel-width":s.containerPixelWidth,onVisible:n.visible},null,8,["target-id","observe","container-pixel-width","onVisible"])):b("",!0)}const L=h(y,[["render",w]]);export{L as default};
