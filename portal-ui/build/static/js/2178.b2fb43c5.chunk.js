"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2178],{32178:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var i,r=n(23430),a=n(18489),o=n(50390),s=n(34424),l=n(65771),c=n(81378),d=n(18201),m=n(46981),u=n(86509),h=n(62449),g=n(4285),p=n(66946),x=n(12066),f=n(25594);!function(e){e.unknown="unknown",e.form="form",e.redirect="redirect",e.serviceAccount="service-account"}(i||(i={}));var v=n(44149),Z=n(30324),b=n(24442),j=n(18221),S=n(45980),y=n(28948),w=n(63548),k=n(72462),P=n(62559),N=(0,h.Z)((function(e){return(0,u.Z)({root:{"& .MuiOutlinedInput-root":{paddingLeft:0,"& svg":{height:16,color:e.palette.primary.main},"& input":{padding:5,paddingLeft:0,"&::placeholder":{fontSize:12},"@media (max-width: 900px)":{padding:10}},"& fieldset":{border:"none",borderBottom:"1px solid #EAEAEA",borderRadius:0},"&.Mui-focused fieldset":{borderBottom:"1px solid #000000",borderRadius:0},"& fieldset:hover":{borderBottom:"2px solid #000000",borderRadius:0}}}})}));function C(e){var t=N();return(0,P.jsx)(x.Z,(0,a.Z)({classes:{root:t.root},variant:"standard"},e))}var I=(0,s.$j)((function(e){return{loggedIn:e.loggedIn}}),{userLoggedIn:v.nD,setErrorSnackMessage:v.Ih})((0,g.Z)((function(e){return(0,u.Z)((0,a.Z)({form:{width:"100%"},submit:{margin:"30px 0px 16px",height:40,boxShadow:"none",padding:"16px 30px"},loginPage:{height:"100%",display:"flex",flexFlow:"column",alignItems:"stretch",position:"relative",padding:84,"@media (max-width: 900px)":{padding:0}},shadowBox:{boxShadow:"rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.125) 0px 15px 50px 0px",height:"100%"},loginContainer:{flex:1,height:"100%","& .right-items":{padding:50,flex:1,height:"100%",display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"center",maxWidth:"33%","@media (max-width: 900px)":{maxWidth:"100%",margin:"auto"}},"& .consoleTextBanner":{fontWeight:300,fontSize:"calc(3vw + 3vh + 1.5vmin)",lineHeight:1.15,color:"#ffffff",flex:1,textAlign:"center",height:"100%",display:"flex",justifyContent:"flex-start",margin:"auto",flexFlow:"column",background:"linear-gradient(120deg,#081c42,#073052)","& .logoLine":{display:"flex",alignItems:"center",fontSize:18,marginTop:40},"& .left-items":{margin:"auto",textAlign:"left",paddingRight:240,paddingBottom:200,"@media (max-width: 1400px)":{paddingBottom:120,paddingRight:50},"@media (max-width: 900px)":{paddingBottom:0,paddingRight:0},"@media (max-width: 600px)":{paddingBottom:0,paddingRight:0}},"& .left-logo":{"& .min-icon":{width:108},marginBottom:10},"& .text-line1":{font:" 100 70px 'Lato'","@media (max-width: 600px)":{fontSize:35},"@media (max-width: 800px)":{fontSize:45}},"& .text-line2":{fontSize:100,fontWeight:100,textTransform:"uppercase","@media (max-width: 600px)":{fontSize:35,marginLeft:0},"@media (max-width: 800px)":{fontSize:55,marginLeft:0}},"& .logo-console":{display:"flex",alignItems:"center","@media (max-width: 900px)":{marginTop:20,flexFlow:"column","& svg":{width:"50%"}}}}},"@media (max-width: 900px)":{loginContainer:{display:"flex",flexFlow:"column","& .consoleTextBanner":{margin:0,flex:2,"& .left-items":{alignItems:"center",textAlign:"center"},"& .logoLine":{justifyContent:"center"}}}},loadingLoginStrategy:{textAlign:"center"},headerTitle:{marginRight:"auto",marginBottom:15},submitContainer:{textAlign:"right"},linearPredef:{height:10},loaderAlignment:{display:"flex",width:"100%",height:"100%",justifyContent:"center",alignItems:"center",flexDirection:"column"},retryButton:{alignSelf:"flex-end"}},k.bK))}))((function(e){var t=e.classes,n=e.userLoggedIn,a=e.setErrorSnackMessage,s=(0,o.useState)(""),u=(0,r.Z)(s,2),h=u[0],g=u[1],x=(0,o.useState)(""),v=(0,r.Z)(x,2),k=v[0],N=v[1],I=(0,o.useState)(""),L=(0,r.Z)(I,2),A=L[0],B=L[1],E=(0,o.useState)({loginStrategy:i.unknown,redirect:""}),F=(0,r.Z)(E,2),R=F[0],M=F[1],z=(0,o.useState)(!1),T=(0,r.Z)(z,2),D=T[0],W=T[1],K=(0,o.useState)(!0),H=(0,r.Z)(K,2),O=H[0],_=H[1],V={form:"/api/v1/login","service-account":"/api/v1/login/operator"},q={form:{accessKey:h,secretKey:A},"service-account":{jwt:k}},G=function(e){e.preventDefault(),W(!0),Z.Z.invoke("POST",V[R.loginStrategy]||"/api/v1/login",q[R.loginStrategy]).then((function(){n(!0),R.loginStrategy===i.form&&localStorage.setItem("userLoggedIn",(0,y.ug)(h));var e="/";localStorage.getItem("redirect-path")&&""!==localStorage.getItem("redirect-path")&&(e="".concat(localStorage.getItem("redirect-path")),localStorage.setItem("redirect-path","")),b.Z.push(e)})).catch((function(e){W(!1),a(e)}))};(0,o.useEffect)((function(){O&&Z.Z.invoke("GET","/api/v1/login").then((function(e){M(e),_(!1)})).catch((function(e){a(e),_(!1)}))}),[O,a]);var J=null;switch(R.loginStrategy){case i.form:J=(0,P.jsx)(o.Fragment,{children:(0,P.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:G,children:[(0,P.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,P.jsx)(f.ZP,{item:!0,xs:12,className:t.spacerBottom,children:(0,P.jsx)(C,{fullWidth:!0,id:"accessKey",className:t.inputField,value:h,onChange:function(e){return g(e.target.value)},placeholder:"Username",name:"accessKey",autoComplete:"username",disabled:D,variant:"outlined",InputProps:{startAdornment:(0,P.jsx)(l.Z,{position:"start",className:t.iconColor,children:(0,P.jsx)(w.oy,{})})}})}),(0,P.jsx)(f.ZP,{item:!0,xs:12,children:(0,P.jsx)(C,{fullWidth:!0,className:t.inputField,value:A,onChange:function(e){return B(e.target.value)},name:"secretKey",type:"password",id:"secretKey",autoComplete:"current-password",disabled:D,placeholder:"Password",variant:"outlined",InputProps:{startAdornment:(0,P.jsx)(l.Z,{position:"start",className:t.iconColor,children:(0,P.jsx)(w.mB,{})})}})})]}),(0,P.jsx)(f.ZP,{item:!0,xs:12,className:t.submitContainer,children:(0,P.jsx)(p.Z,{type:"submit",variant:"contained",color:"primary",className:t.submit,disabled:""===A||""===h||D,children:"Login"})}),(0,P.jsx)(f.ZP,{item:!0,xs:12,className:t.linearPredef,children:D&&(0,P.jsx)(c.Z,{})})]})});break;case i.redirect:J=(0,P.jsx)(o.Fragment,{children:(0,P.jsx)(p.Z,{component:"a",href:R.redirect,type:"submit",variant:"contained",color:"primary",className:t.submit,children:"Login with SSO"})});break;case i.serviceAccount:J=(0,P.jsx)(o.Fragment,{children:(0,P.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:G,children:[(0,P.jsx)(f.ZP,{container:!0,spacing:2,children:(0,P.jsx)(f.ZP,{item:!0,xs:12,children:(0,P.jsx)(C,{required:!0,className:t.inputField,fullWidth:!0,id:"jwt",value:k,onChange:function(e){return N(e.target.value)},name:"jwt",autoComplete:"off",disabled:D,placeholder:"Enter JWT",variant:"outlined",InputProps:{startAdornment:(0,P.jsx)(l.Z,{position:"start",children:(0,P.jsx)(w.mB,{})})}})})}),(0,P.jsx)(f.ZP,{item:!0,xs:12,className:t.submitContainer,children:(0,P.jsx)(p.Z,{type:"submit",variant:"contained",color:"primary",className:t.submit,disabled:""===k||D,children:"Login"})}),(0,P.jsx)(f.ZP,{item:!0,xs:12,className:t.linearPredef,children:D&&(0,P.jsx)(c.Z,{})})]})});break;default:J=(0,P.jsx)("div",{className:t.loaderAlignment,children:O?(0,P.jsx)(d.Z,{className:t.loadingLoginStrategy}):(0,P.jsxs)(o.Fragment,{children:[(0,P.jsx)("div",{children:(0,P.jsx)("p",{children:"An error has occurred, the backend cannot be reached."})}),(0,P.jsx)("div",{children:(0,P.jsx)(p.Z,{onClick:function(){_(!0)},endIcon:(0,P.jsx)(j.default,{}),color:"primary",variant:"outlined",className:t.retryButton,children:"Retry"})})]})})}var U=R.loginStrategy===i.serviceAccount?"Operator":"Afranet";return(0,P.jsx)(o.Fragment,{children:(0,P.jsxs)(m.Z,{className:t.loginPage,children:[(0,P.jsx)(S.Z,{}),(0,P.jsx)("div",{className:t.shadowBox,children:(0,P.jsxs)(f.ZP,{container:!0,className:t.loginContainer,children:[(0,P.jsx)(f.ZP,{item:!0,className:"consoleTextBanner",children:(0,P.jsxs)("div",{className:"left-items",children:[(0,P.jsx)("div",{className:"left-logo",children:(0,P.jsx)(w.BH,{})}),(0,P.jsx)("div",{className:"text-line1",children:"Welcome to"}),(0,P.jsx)("div",{className:"text-line2",children:U})]})}),(0,P.jsx)(f.ZP,{item:!0,className:"right-items",children:J})]})})]})})})))},18201:function(e,t,n){n.d(t,{Z:function(){return A}});var i=n(17186),r=n(1048),a=n(32793),o=n(50390),s=n(44977),l=n(50076),c=n(19471),d=n(91442),m=n(15573),u=n(8208),h=n(10594);function g(e){return(0,h.Z)("MuiCircularProgress",e)}(0,n(43349).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p,x,f,v,Z,b,j,S,y=n(62559),w=["className","color","disableShrink","size","style","thickness","value","variant"],k=44,P=(0,c.F4)(Z||(Z=p||(p=(0,i.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),N=(0,c.F4)(b||(b=x||(x=(0,i.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),C=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["color".concat((0,d.Z)(n.color))]]}})((function(e){var t=e.ownerState,n=e.theme;return(0,a.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:n.palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,c.iv)(j||(j=f||(f=(0,i.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),P)})),I=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),L=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var n=e.ownerState;return[t.circle,t["circle".concat((0,d.Z)(n.variant))],n.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,n=e.theme;return(0,a.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,c.iv)(S||(S=v||(v=(0,i.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),N)})),A=o.forwardRef((function(e,t){var n=(0,m.Z)({props:e,name:"MuiCircularProgress"}),i=n.className,o=n.color,c=void 0===o?"primary":o,u=n.disableShrink,h=void 0!==u&&u,p=n.size,x=void 0===p?40:p,f=n.style,v=n.thickness,Z=void 0===v?3.6:v,b=n.value,j=void 0===b?0:b,S=n.variant,P=void 0===S?"indeterminate":S,N=(0,r.Z)(n,w),A=(0,a.Z)({},n,{color:c,disableShrink:h,size:x,thickness:Z,value:j,variant:P}),B=function(e){var t=e.classes,n=e.variant,i=e.color,r=e.disableShrink,a={root:["root",n,"color".concat((0,d.Z)(i))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(n)),r&&"circleDisableShrink"]};return(0,l.Z)(a,g,t)}(A),E={},F={},R={};if("determinate"===P){var M=2*Math.PI*((k-Z)/2);E.strokeDasharray=M.toFixed(3),R["aria-valuenow"]=Math.round(j),E.strokeDashoffset="".concat(((100-j)/100*M).toFixed(3),"px"),F.transform="rotate(-90deg)"}return(0,y.jsx)(C,(0,a.Z)({className:(0,s.Z)(B.root,i),style:(0,a.Z)({width:x,height:x},F,f),ownerState:A,ref:t,role:"progressbar"},R,N,{children:(0,y.jsx)(I,{className:B.svg,ownerState:A,viewBox:"".concat(22," ").concat(22," ").concat(k," ").concat(k),children:(0,y.jsx)(L,{className:B.circle,style:E,ownerState:A,cx:k,cy:k,r:(k-Z)/2,fill:"none",strokeWidth:Z})})}))}))},65771:function(e,t,n){n.d(t,{Z:function(){return j}});var i=n(36222),r=n(1048),a=n(32793),o=n(50390),s=n(44977),l=n(50076),c=n(91442),d=n(35477),m=n(14478),u=n(23060),h=n(8208),g=n(10594);function p(e){return(0,g.Z)("MuiInputAdornment",e)}var x=(0,n(43349).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=n(15573),v=n(62559),Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,h.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,c.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&(0,i.Z)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),j=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"MuiInputAdornment"}),i=n.children,h=n.className,g=n.component,x=void 0===g?"div":g,j=n.disablePointerEvents,S=void 0!==j&&j,y=n.disableTypography,w=void 0!==y&&y,k=n.position,P=n.variant,N=(0,r.Z)(n,Z),C=(0,u.Z)()||{},I=P;P&&C.variant,C&&!I&&(I=C.variant);var L=(0,a.Z)({},n,{hiddenLabel:C.hiddenLabel,size:C.size,disablePointerEvents:S,position:k,variant:I}),A=function(e){var t=e.classes,n=e.disablePointerEvents,i=e.hiddenLabel,r=e.position,a=e.size,o=e.variant,s={root:["root",n&&"disablePointerEvents",r&&"position".concat((0,c.Z)(r)),o,i&&"hiddenLabel",a&&"size".concat((0,c.Z)(a))]};return(0,l.Z)(s,p,t)}(L);return(0,v.jsx)(m.Z.Provider,{value:null,children:(0,v.jsx)(b,(0,a.Z)({as:x,ownerState:L,className:(0,s.Z)(A.root,h),ref:t},N,{children:"string"!==typeof i||w?(0,v.jsxs)(o.Fragment,{children:["start"===k?(0,v.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,i]}):(0,v.jsx)(d.Z,{color:"text.secondary",children:i})}))})}))}}]);
//# sourceMappingURL=2178.b2fb43c5.chunk.js.map
