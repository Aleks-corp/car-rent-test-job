import{s as t,P as n,j as r}from"./main-ac88dced.js";const s=t.button`
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
    outline: none;
    background-color: #0b44cd;
  }
`,c=({title:o,type:e,onClick:i})=>r.jsx(s,{type:e,onClick:i,children:o});c.propTypes={title:n.string.isRequired,type:n.string.isRequired,onClick:n.func};const d=t.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 0 30px;
`,p=t.h1``,l=({title:o,children:e})=>r.jsxs(d,{children:[o&&r.jsx(p,{children:o}),e]});l.propTypes={title:n.string,children:n.node.isRequired};export{c as B,l as S};
