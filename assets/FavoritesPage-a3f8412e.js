import{a as c,c as p,d as f,r as o,j as s,L as h}from"./main-ac88dced.js";import{S as v}from"./Section-62221813.js";import{E as C,C as E,a as L,B as S}from"./CatalogList.styled-cdf9f81e.js";const P=()=>{const l=c(p),e=c(f),a=12,[d,n]=o.useState([]),[r,i]=o.useState(1),[g,x]=o.useState(1);o.useEffect(()=>{i(1),x(Math.ceil(e.length/a)),n(e.slice(0,a))},[e]);const m=()=>{n(t=>t.concat(e.slice(a*r,a*(r+1)))),i(t=>t+1)},u=t=>e.some(j=>j.id===t);return s.jsxs(s.Fragment,{children:[l?s.jsx(h,{}):e.length===0?s.jsx(C,{children:"Sorry. You don't have a cars in favorites"}):s.jsx(E,{children:d.map(t=>s.jsx(L,{item:t,favoriteIcon:u(t.id)},t.id))}),g>r&&s.jsx(S,{onClick:m,children:"Load More"})]})};function F(){return s.jsx(v,{children:s.jsx(P,{})})}F.displayName="FavoritesPage";export{F as Component};