import{u as m}from"./useContainerPixelWidth-7c0e786a.mjs";import{n as b}from"./runtime-dom.esm-bundler-f8204f67.mjs";import{_ as p,l as n,m as a,x as r,G as u,z as l,A as d,y,p as _}from"./_plugin-vue_export-helper-15c97ded.mjs";import"./useWindowDimensions-9d7c55cb.mjs";import"./app.config-2d714cad.mjs";import"./index-e5521a99.mjs";import"./state-171775be.mjs";import"./cookie-ba326bc4.mjs";const h={props:{buttonText:{type:String,required:!0},subscribeText:{type:String,required:!0},subscribeTextColor:{type:String,required:!0},buttonBackgroundColor:{type:String,required:!0},buttonTextColor:{type:String,required:!0},percentOfContentArea:{type:Number}},data(){return{email:""}},computed:{containerPixelWidth(){return m(this.percentOfContentArea)},buttonStyle(){return{color:this.buttonTextColor,backgroundColor:this.buttonBackgroundColor}},subscribeTextStyle(){return{color:this.subscribeTextColor}},omedaSite(){var t;return((t=this.$ss.magazine)==null?void 0:t.nlOmedaSite)??""},omedaQuery(){var t;return((t=this.$ss.magazine)==null?void 0:t.nlSignupQuery)??""}}},x={class:"ebm-subscribe"},S=["value"],f=["value"];function g(t,o,i,C,s,e){return n(),a("div",x,[r("h3",{class:l(e.containerPixelWidth>500?"subscribe-header-wide":"subscribe-header-narrow"),style:d(e.subscribeTextStyle)},u(i.subscribeText),7),r("form",{action:"https://endeavor.dragonforms.com/loading.do",method:"GET",class:l(e.containerPixelWidth>500?"subscribe-form-wide":"subscribe-form-narrow")},[r("input",{type:"hidden",name:"omedasite",value:e.omedaSite},null,8,S),y(r("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>s.email=c),type:"email",name:"em",placeholder:"Email Address"},null,512),[[b,s.email]]),e.omedaQuery?(n(),a("input",{key:0,type:"hidden",name:"pk",value:e.omedaQuery},null,8,f)):_("",!0),r("button",{type:"submit",style:d(e.buttonStyle)},u(i.buttonText),5)],2)])}const A=p(h,[["render",g],["__scopeId","data-v-f6cde378"]]);export{A as default};