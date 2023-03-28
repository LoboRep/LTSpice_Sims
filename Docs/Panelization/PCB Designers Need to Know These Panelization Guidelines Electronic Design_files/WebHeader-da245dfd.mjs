import{_ as Oe}from"./preload-helper-87151e19.mjs";import{_ as Ne}from"./IconElement-b96dcc23.mjs";import{u as Te,i as Ce}from"./app.config-2d714cad.mjs";import{u as Ee}from"./composables-7a63e89a.mjs";import{u as Ue,a as Be}from"./WebPageContent-8cf5c859.mjs";import{u as f}from"./useWindowDimensions-9d7c55cb.mjs";import{u as je}from"./useTenantKey-2ab82870.mjs";import{u as _}from"./useSiteUser-3754f9ab.mjs";import{_ as Re,l as a,m as c,p as S,x as l,A as h,B as xe,F as p,D as ke,z as He,G as L,E as Ae,C as qe,au as Ve,b2 as Je,J as Ke,aY as Ge,aW as Xe}from"./_plugin-vue_export-helper-15c97ded.mjs";import{f as w}from"./index-a84c5b70.mjs";import"./client-only-91773298.mjs";import"./index-e5521a99.mjs";import"./AdminPageTitle-59a2224c.mjs";import"./runtime-dom.esm-bundler-f8204f67.mjs";import"./cookie-ba326bc4.mjs";import"./useAdminStyles-191b9c4f.mjs";import"./useCmsUser-0ed98f87.mjs";import"./state-171775be.mjs";import"./useAdUnitPatterns-f87d2d88.mjs";import"./GAMController-32f716ac.mjs";import"./useContainerPixelWidth-7c0e786a.mjs";import"./WebButtonElement-69a134e8.mjs";import"./useSupportedContentTypes-e7642151.mjs";import"./content_types-44470a40.mjs";import"./useUUID-f02a73c2.mjs";import"./useToast-49717dcc.mjs";import"./_commonjsHelpers-87174ba5.mjs";import"./vue.runtime.esm-bundler-bae60989.mjs";import"./vue-router-216c064a.mjs";const Ye=Ke(()=>Oe(()=>import("./WebHeaderSidebar-253c6fff.mjs"),["./WebHeaderSidebar-253c6fff.mjs","./preload-helper-87151e19.mjs","./IconElement-b96dcc23.mjs","./client-only-91773298.mjs","./_plugin-vue_export-helper-15c97ded.mjs","./IconElement.74f2b182.css","./useCmsUser-0ed98f87.mjs","./app.config-2d714cad.mjs","./index-e5521a99.mjs","./state-171775be.mjs","./cookie-ba326bc4.mjs","./WebHeaderSidebar.ead2f02b.css"],import.meta.url).then(i=>i.default||i)),Ze={props:{page:{type:Object},logo:{type:String},cmsUsername:{type:String},includeShell:{type:Boolean}},setup(i){var z,I,O,N,T,E,U,B,j,R,q,V,J,K,G,X,Y,Z,Q,$,D,ee,te,ie,ne,oe,re,se,le,de,ae,ce,me,he,ue,ye,pe,fe,ge,we,be,ve,_e,Se;const{$ss:t}=Te(),{pageData:e}=i.page,u=(z=e==null?void 0:e.primaryImage)!=null&&z.src?e.primaryImage.src.split("?")[0]+"?auto=format,compress&fit=fill&fill=blur&w=1200&h=630":"",y=((I=e==null?void 0:e.metadata)==null?void 0:I.description)??(e==null?void 0:e.teaser)??"",o=((O=e==null?void 0:e.siteContext)==null?void 0:O.path)??(e==null?void 0:e.canonicalPath)??"",C=e!=null&&e.company?e==null?void 0:e.company.id:"",A=e!=null&&e.company?e==null?void 0:e.company.name:"",d=(e==null?void 0:e.type)==="section"?"website":"article",M=((N=e==null?void 0:e.taxonomy)==null?void 0:N.edges)??[],b=((T=e==null?void 0:e.authors)==null?void 0:T.edges)??[],x=((E=e==null?void 0:e.images)==null?void 0:E.edges)??[],g=t.general.favicon,Me=t.socialLinks?Object.values(t.socialLinks).filter(r=>r!==""):[],We=!!(e!=null&&e.gating),Le=(U=e==null?void 0:e.userRegistration)==null?void 0:U.isRequired,Pe=!We&&!Le,P=(B=t.oneTrust)==null?void 0:B.scriptId,W=(R=(j=t.general)==null?void 0:j.enableNoIndexByContentType)==null?void 0:R.map(r=>r.toLowerCase()),Fe=W==null?void 0:W.includes(i.page.layoutType.contentType),F=(e==null?void 0:e.type)==="section"?{rel:"alternate",type:"application/rss+xml",title:"RSS Feed",href:`__rss/website-scheduled-content.xml?input=%7B%22sectionAlias%22%3A%22${e.alias}%22%7D`}:"",ze=[{rel:"canonical",href:"https://www."+((q=t==null?void 0:t.general)==null?void 0:q.rootDomain)+o},{rel:"icon",type:"image/x-icon",href:g},{rel:"apple-touch-icon",size:"180x180",href:g+"?w=180&h=180&fm=png"},{rel:"icon",type:"image/png",size:"32x32",href:g+"?w=32&h=32&fm=png"},{rel:"icon",type:"image/png",size:"16x16",href:g+"?w=16&h=16&fm=png"},F,{rel:"icon",type:"image/png",size:"32x32",href:g+"?w=32&h=32&fm=png"},{rel:"icon",type:"image/png",size:"16x16",href:g+"?w=16&h=16&fm=png"},F,{href:"https://fonts.gstatic.com",rel:"preconnect"}],m=[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"},{"http-equiv":"X-UA-Compatible",content:"IE=edge"},{name:"description",property:"og:description","item-prop":"description",content:y},{property:"og:title","item-prop":"name",content:(e==null?void 0:e.name)??""},{name:"og:url",content:o},{name:"og:site_name",content:((V=t==null?void 0:t.general)==null?void 0:V.siteName)??""},{name:"og:locale",content:"en"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:(e==null?void 0:e.name)??""},{name:"twitter:description",content:y},{hid:"og-type",name:"og:type",content:d},{hid:"type",name:"type",content:d},{name:"theme-color",content:t.baseStyles.primaryColor}];if(u&&(m.push({name:"twitter:image:src",content:u}),m.push({name:"image",property:"og:image","item-prop":"image",content:u}),m.push({name:"robots",content:"max-image-preview:large"})),u||(m.push({name:"twitter:image:src",content:`${t.header.logo.split("?")[0]}?auto=format,compress&fit=fill&fill=solid&fill-color=${t.header.secondaryBackgroundColor.replace("#","")}&w=1200&h=627`}),m.push({name:"image",property:"og:image","item-prop":"image",content:`${t.header.logo.split("?")[0]}?auto=format,compress&fit=fill&fill=solid&fill-color=${t.header.secondaryBackgroundColor.replace("#","")}&w=1200&h=627`})),(J=e==null?void 0:e.primarySection)!=null&&J.name&&m.push({name:"pterm",content:e.primarySection.name.toLowerCase()}),M&&m.push({name:"tag",content:M.map(r=>r.node.name).join().toLowerCase()}),b.length&&m.push({name:"author",content:b.map(r=>r.node.name).join()}),e!=null&&e.published&&(m.push({name:"date-pub",content:w(new Date(e.published),"yyyy-MM-dd")??""}),m.push({name:"article:published_time",content:(e==null?void 0:e.publishedDate)??""})),e!=null&&e.updatedDate&&m.push({name:"article:modified_time",content:(e==null?void 0:e.updatedDate)??""}),Fe&&m.push({name:"robots",content:"noindex"}),e!=null&&e.websiteSchedules){const r=[];e.websiteSchedules.map(s=>{s.section.name!==e.primarySection.name&&r.push(s.section.name)}),m.push({name:"sterms",content:r.join(",").toLowerCase()})}if((K=e==null?void 0:e.metadata)!=null&&K.autoKeywords&&m.push({name:"autoTags",content:JSON.stringify(e.metadata.autoKeywords)}),e!=null&&e.id&&(e==null?void 0:e.type)!=="Page"){const r={page_type:"content",canonical_path:o,query_string:Ce().fullPath.split("?").length>0?Ce().fullPath.split("?")[1]:"",content:{id:e==null?void 0:e.id,type:((G=e==null?void 0:e.type)==null?void 0:G.toLowerCase())??"",name:(e==null?void 0:e.name)??"",published:e!=null&&e.published?new Date(e==null?void 0:e.published).toISOString():void 0},created_by:e==null?void 0:e.createdBy,company:{id:C,name:A},section:{id:((X=e==null?void 0:e.primarySection)==null?void 0:X.id)??"",name:((Y=e==null?void 0:e.primarySection)==null?void 0:Y.name)??"",alias:((Z=e==null?void 0:e.primarySection)==null?void 0:Z.alias)??"",fullName:((Q=e==null?void 0:e.primarySection)==null?void 0:Q.fullName)??""},section_hierarchy:(D=($=e==null?void 0:e.primarySection)==null?void 0:$.hierarchy)==null?void 0:D.map(s=>({id:s.id,name:s.name,alias:s.alias})),taxonomy:M.map(s=>s.node),authors:b.map(s=>({id:s.node.id,name:s.node.name}))};m.push({name:"BlueConic",content:JSON.stringify(r)})}const v=["section","video","event"].find(r=>r===(e!=null&&e.type?e.type.toLowerCase():"section"))??"article";let n;if(o==="/"){n=[];const r={"@context":"https://schema.org"};r["@type"]="NewsMediaOrganization",r.name=((ee=t==null?void 0:t.general)==null?void 0:ee.siteName)??"",r.url="https://www."+((te=t==null?void 0:t.general)==null?void 0:te.rootDomain),r.logo=(ie=t==null?void 0:t.header)==null?void 0:ie.logo,r.sameAs=Me,n.push(r);const s={"@context":"https://schema.org"};s["@type"]="WebSite",s.url="https://www."+((ne=t==null?void 0:t.general)==null?void 0:ne.rootDomain),s.potentialAction={},s.potentialAction["@type"]="SearchAction",s.potentialAction.target={},s.potentialAction.target["@type"]="EntryPoint",s.potentialAction.target.urlTemplate="https://www."+((oe=t==null?void 0:t.general)==null?void 0:oe.rootDomain)+"/search?"+je().root+"[query]={search_term_string}",s.potentialAction["query-input"]="required name=search_term_string",n.push(s)}else if(["article","video","event"].includes(v)){if(n={"@context":"https://schema.org"},v==="event"&&(n["@type"]="Event",n.name=(e==null?void 0:e.name)??"",n.startDate=e!=null&&e.startDate?w(new Date(e.startDate),"yyyy-MM-dd'T'HH:mmxxx"):"",n.endDate=e!=null&&e.endDate?w(new Date(e.endDate),"yyyy-MM-dd'T'HH:mmxxx"):"",e!=null&&e.teaser&&(n.description=e==null?void 0:e.teaser),e!=null&&e.venue||e!=null&&e.address1)){n.location={},n.location["@type"]="Place",(re=e.venue)!=null&&re.name&&(n.location.name=e.venue.name??"");const r={};(e.address1??((se=e.venue)==null?void 0:se.address1))&&(r.streetAddress=e.address1??((le=e.venue)==null?void 0:le.address1)),(e.city??((de=e.venue)==null?void 0:de.city))&&(r.addressLocality=e.city??((ae=e.venue)==null?void 0:ae.city)),(e.postalCode||(ce=e.venue)!=null&&ce.postalCode)&&(r.postalCode=e.postalCode??((me=e.venue)==null?void 0:me.postalCode)),(e.state||(he=e.venue)!=null&&he.region)&&(r.addressRegion=e.state??((ue=e.venue)==null?void 0:ue.region)),(e.country??((ye=e.venue)==null?void 0:ye.country))&&(r.addressCountry=e.country??((pe=e.venue)==null?void 0:pe.country)),Object.keys(r).length>0&&(n.location.address={},n.location.address["@type"]="PostalAddress",n.location.address={...n.location.address,...r})}if((v==="article"||v==="video")&&(n["@type"]="NewsArticle",n.mainEntityOfPage={},n.mainEntityOfPage["@type"]="WebPage",n.mainEntityOfPage["@id"]="https://www."+((fe=t==null?void 0:t.general)==null?void 0:fe.rootDomain)+o,n.headline=e==null?void 0:e.name,n.description=y,x.length&&(n.image=x.map(r=>r.node.src)),e!=null&&e.published&&(n.datePublished=w(new Date(e.published),"yyyy-MM-dd")??""),e!=null&&e.updated&&(n.dateModified=w(new Date(e.updated),"yyyy-MM-dd")??""),b.length&&(n.author=b.map(r=>{var s;return{"@type":"Person",name:r.node.name,url:"https://www."+((s=t==null?void 0:t.general)==null?void 0:s.rootDomain)+"/"+r.node.id}})),n.publisher={},n.publisher["@type"]="Organization",n.publisher.name=((ge=t==null?void 0:t.general)==null?void 0:ge.siteName)??"",(we=t==null?void 0:t.header)!=null&&we.logo&&(n.publisher.logo={},n.publisher.logo["@type"]="ImageObject",n.publisher.logo.url=(be=t==null?void 0:t.header)==null?void 0:be.logo,n.publisher.logo.width=((ve=t==null?void 0:t.header)==null?void 0:ve.logoWidth)??"",n.publisher.logo.height=((_e=t==null?void 0:t.header)==null?void 0:_e.logoHeight)??""),v==="video"&&(e!=null&&e.embedCode))){e.embedCode.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);const r=RegExp.$6;let s="";RegExp.$3.includes("youtu")?s=`https://www.youtube.com/embed/${r}`:RegExp.$3.includes("vimeo")&&(s=`https://player.vimeo.com/video/${r}`),n.video={},n.video["@type"]="VideoObject",n.video.name=e==null?void 0:e.name,n.video.description=y,n.video.contentUrl=s,n.video.uploadDate=e!=null&&e.published?w(new Date(e.published),"yyyy-MM-dd'T'HH:mmxxx"):"",x.length&&(n.video.thumbnailUrl=x.map(Ie=>Ie.node.src))}Pe||(n.isAccessibleForFree="False",n.hasPart={},n.hasPart["@type"]="WebPageElement",n.hasPart.isAccessibleForFree="False",n.hasPart.cssSelector=".paywall")}const k=[];return P&&(k.push({type:"text/javascript",src:"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js","data-domain-script":P}),k.push({type:"text/javascript",children:`function OptanonWrapper() {
        }`})),n&&k.push({type:"application/ld+json",children:JSON.stringify(n)}),Ee({meta:m,title:(((Se=e==null?void 0:e.name)==null?void 0:Se.replace(/(<([^>]+)>)/gi,""))??"")+" | "+t.general.siteName,script:k,link:ze}),{isAuthenticated:!1,siteUserLoggedIn:null,membershipSystemActive:null,loginEnabled:t.modules.identityx,scriptsAdded:{}}},data(){return{isSidenavOpen:!1}},computed:{oneTrustCss(){return Ue.getCss()},headerHeight(){return f().value.headerHeight},secondaryMenuFontSize(){return this.menuFontSize(this.secondaryMenu.links,14)},primaryMenuFontSize(){return this.menuFontSize(this.primaryMenu.links,16)},loginSearchFontSize(){var i,t;return(t=(i=this.secondaryMenu)==null?void 0:i.links)!=null&&t.length?this.secondaryMenuFontSize:"14px"},windowWidth(){return f().value.windowWidth},pageWidth(){return f().value.pageWidth},primarySectionPath(){var t;const{pageData:i}=this.page;return((t=i==null?void 0:i.primarySection)==null?void 0:t.canonicalPath)??(i==null?void 0:i.canonicalPath)},alignLoginSearch(){var i,t;return this.windowWidth<600?"center":(t=(i=this.secondaryMenu)==null?void 0:i.links)!=null&&t.length?"flex-end":"center"},logoHeight(){return this.$ss.header.logoHeight??35},primaryMenu(){return this.$ss.menu.header_primary},secondaryMenu(){return this.$ss.menu.header_secondary}},async mounted(){this.membershipSystemActive=await _.membershipSystemActive(),this.scriptsAdded=Be.loadScripts(this.page),window.addEventListener("resize",this.updateHeaderHeight),this.updateHeaderHeight(),this.isAuthenticated=this.$idx.isLoggedIn(),this.siteUserLoggedIn=_.isLoggedIn()},unmounted(){window.removeEventListener("resize",this.updateHeaderHeight)},methods:{register(){_.getRegistrationLink()},login(){_.getLoginLink()},menuFontSize(i,t){let e=0;i.map(o=>{e+=o.label.length});let y=2.5*(f().value.pageWidth+60<this.windowWidth?f().value.pageWidth:this.windowWidth)/(e+i.length*15);return y>t&&(y=t),f().value.pageWidth<900?"1vh":y+"px"},openCloseNav(){this.updateHeaderHeight();const i=this.isSidenavOpen;this.isSidenavOpen=!i},updateHeaderHeight(){f({headerHeight:this.$el.clientHeight}),window.setTimeout(this.updateHeaderHeight,500)},async logout(){this.error=null;try{await this.$idx.logout(),location.reload()}catch(i){this.error=`Unable to logout: ${i.message}`}},async logoutSiteUser(){this.error=null;try{await _.logout()}catch(i){this.error=`Unable to logout: ${i.message}`}}}},H=i=>(Ge("data-v-8647af39"),i=i(),Xe(),i),Qe=["data-interstitial-value"],$e={href:"/",class:"ebm-header__logo"},De=["src","alt","height"],et={key:0,class:"ebm-header__secondary-menu"},tt=["href","target"],it={key:1,class:"ebm-header__secondary-spacer"},nt=H(()=>l("li",null,[l("a",{href:"/account"},"Account")],-1)),ot=H(()=>l("li",null,[l("a",{href:"/user/profile"},"My Profile")],-1)),rt=H(()=>l("li",null,[l("a",{href:"/user/login"},"Log In")],-1)),st=H(()=>l("li",null,[l("a",{href:"/user/register"},"Register")],-1)),lt={key:2},dt={href:"/search"},at={key:1},ct=["href","target"];function mt(i,t,e,u,y,o){const C=Ne,A=Ye;return a(),c("header",{class:"ebm-header",style:h({top:e.includeShell&&e.cmsUsername?"38px":0})},[i.$ss.header.prestitialLogo?(a(),c("div",{key:0,id:"wl_flogop_div","data-interstitial-prop":"logo-url","data-interstitial-value":i.$ss.header.prestitialLogo,style:{display:"none"}},null,8,Qe)):S("",!0),l("div",{class:"ebm-header__secondary",style:h({backgroundColor:i.$ss.header.secondaryBackgroundColor,color:i.$ss.header.secondaryTextColor,fontFamily:i.$ss.primaryFontFamily})},[l("div",{style:h({maxWidth:i.$ss.general.siteWidth+"px"}),class:"ebm-header__secondary__content"},[l("div",{class:"ebm-header__secondary__burger",style:h({backgroundColor:o.pageWidth<900?i.$ss.header.hamburgerMenuIconBGColor:"transparent"}),onClick:t[0]||(t[0]=(...d)=>o.openCloseNav&&o.openCloseNav(...d))},[xe(C,{icon:y.isSidenavOpen?"mdi:close":"mdi:menu",width:Number(30),label:i.$ss.header.hamburgerMenuIconLabel&&o.pageWidth<900?"MENU":"","icon-color":o.pageWidth<900?i.$ss.header.hamburgerMenuIconColor:""},null,8,["icon","width","label","icon-color"])],4),l("a",$e,[l("img",{src:i.$ss.header.logo,style:h({height:"auto",maxHeight:o.windowWidth>600?o.logoHeight+"px":"25px",maxWidth:o.windowWidth>600?"auto":"180px"}),alt:i.$ss.general.siteName,height:o.windowWidth>600?o.logoHeight:25},null,12,De)]),o.pageWidth>=900?(a(),c("div",et,[(a(!0),c(p,null,ke(o.secondaryMenu.links,d=>(a(),c("li",{key:d.href,style:h({fontSize:o.secondaryMenuFontSize,maxHeight:o.logoHeight+"px"})},[l("a",{href:d.href,class:He([o.primarySectionPath===d.href?"selected":""]),target:d.href[0]==="/"?"_self":"_blank"},L(d.label),11,tt)],4))),128))])):(a(),c("div",it)),l("ul",{class:"ebm-header__login-search",style:h({fontSize:o.loginSearchFontSize,alignItems:o.alignLoginSearch})},[u.membershipSystemActive?(a(),c(p,{key:0},[u.siteUserLoggedIn===!0?(a(),c(p,{key:0},[nt,l("li",null,[l("a",{href:"#",onClick:t[1]||(t[1]=(...d)=>o.logoutSiteUser&&o.logoutSiteUser(...d))},"Logout")])],64)):u.siteUserLoggedIn===!1?(a(),c(p,{key:1},[l("li",null,[l("a",{href:"#",onClick:t[2]||(t[2]=(...d)=>o.login&&o.login(...d))},"Login")]),l("li",null,[l("a",{href:"#",onClick:t[3]||(t[3]=(...d)=>o.register&&o.register(...d))},"Join")])],64)):S("",!0)],64)):i.$ss.modules.identityx&&u.membershipSystemActive===!1?(a(),c(p,{key:1},[u.isAuthenticated?(a(),c(p,{key:0},[ot,l("li",null,[l("a",{href:"#",onClick:t[4]||(t[4]=(...d)=>o.logout&&o.logout(...d))},"Log Out")])],64)):(a(),c(p,{key:1},[rt,st],64))],64)):S("",!0),i.$ss.modules.search?(a(),c("li",lt,[l("a",dt,[i.$ss.header.searchStyle==="icon"?(a(),Ae(C,{key:0,icon:"mdi:magnify",width:22})):(a(),c("span",at,"Search"))])])):S("",!0)],4)],4)],4),o.primaryMenu.links.length?(a(),c("div",{key:1,class:"ebm-header__primary",style:h({backgroundColor:i.$ss.header.primaryBackgroundColor,color:i.$ss.header.primaryTextColor,fontFamily:i.$ss.primaryFontFamily})},[l("div",{style:h({maxWidth:i.$ss.general.siteWidth+"px",margin:"auto"})},[l("div",{class:"ebm-header__primary-menu",style:h({display:o.pageWidth>=900?"flex":"none"})},[(a(!0),c(p,null,ke(o.primaryMenu.links,d=>(a(),c("li",{key:d.href,style:h({fontSize:o.primaryMenuFontSize})},[l("a",{href:d.href,class:He([o.primarySectionPath===d.href?"selected":""]),target:d.href[0]==="/"?"_self":"_blank"},L(d.label),11,ct)],4))),128))],4)],4)],4)):S("",!0),xe(A,{"header-height":o.headerHeight,"is-sidebar-open":y.isSidenavOpen,"primary-section-path":o.primarySectionPath,style:h({fontFamily:i.$ss.primaryFontFamily})},null,8,["header-height","is-sidebar-open","primary-section-path","style"]),(a(),Ae(Je("style"),null,{default:qe(()=>[Ve(L(o.oneTrustCss),1)]),_:1}))],4)}const jt=Re(Ze,[["render",mt],["__scopeId","data-v-8647af39"]]);export{jt as default};