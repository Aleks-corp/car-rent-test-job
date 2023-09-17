import{g as l,s,j as n}from"./main-f533a4df.js";var a={exports:{}},m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",h=m,u=h;function i(){}function c(){}c.resetWarningCache=i;var T=function(){function e(P,R,S,v,_,y){if(y!==u){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:c,resetWarningCache:i};return t.PropTypes=t,t};a.exports=T();var f=a.exports;const p=l(f),d=s.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 0 30px;
`,x=s.h1``,g=({title:e,children:r})=>n.jsxs(d,{children:[e&&n.jsx(x,{children:e}),r]});g.propTypes={title:p.string,children:p.node.isRequired};export{p as P,g as S};
