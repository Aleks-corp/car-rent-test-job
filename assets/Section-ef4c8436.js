import{s as t,P as o,j as n}from"./main-ec3c6de5.js";const s=t.button`
  cursor: pointer;
  border: 0;
  width: 100%;
  border-radius: 12px;
  padding: 12px 44px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background-color: #3470ff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,c=({title:r,type:e,onClick:i})=>n.jsx(s,{type:e,onClick:i,children:r});c.propTypes={title:o.string.isRequired,type:o.string.isRequired,onClick:o.func};const d=t.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 0 30px;
`,p=t.h1``,f=({title:r,children:e})=>n.jsxs(d,{children:[r&&n.jsx(p,{children:r}),e]});f.propTypes={title:o.string,children:o.node.isRequired};export{c as B,f as S};
