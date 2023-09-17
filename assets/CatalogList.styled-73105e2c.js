import{s as t,G as d,P as i,a as y,o as C,l as q,j as e,p as R,q as k,t as z,v as I,w as $}from"./main-0366a32c.js";import{B as L}from"./Section-59a2b023.js";const T=t.li`
  width: 274px;
`,B=t.div`
  border-radius: 14px;
  width: 274px;
  height: 268px;
  position: relative;
`,F=t.div`
  position: absolute;
  z-index: 5;
  top: -268px;
  border-radius: 14px;
  width: 274px;
  height: 268px;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`,M=t.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`,S=t.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  padding: 0;
  position: absolute;
  z-index: 6;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: #3470ff;
`,P=t.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 9px;
`,a=t.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,D=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
`,p=t.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  word-spacing: 2px;
`;function E(o){return d({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(o)}function W(o){return d({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(o)}const G=({item:o,favoriteIcon:r})=>{const l=y(C),{img:s,make:c,model:x,year:g,rentalPrice:h,address:u,rentalCompany:m,type:f,engineSize:b,mileage:w}=o,j=u.split(", ").slice(1,3).join(" | "),v=w.toLocaleString("en-IN"),n=q();return e.jsxs(T,{children:[e.jsxs(B,{children:[e.jsx(M,{src:s||R}),e.jsx(F,{}),e.jsx(S,{type:"button",onClick:r?()=>n(z(o.id)):()=>n(k(o)),children:r?e.jsx(W,{}):e.jsx(E,{color:"rgba(255, 255, 255, 0.80)"})})]}),e.jsxs(P,{children:[e.jsx(a,{children:`${c}, ${g}`}),e.jsx(a,{children:h})]}),e.jsxs(D,{children:[e.jsx(p,{children:`${j} | ${m}`}),e.jsx(p,{children:`${f}  |  ${x}  |  ${b}  |  ${v}`})]}),e.jsx(L,{title:"Learn more",type:"button",onClick:()=>{n(I(!l)),n($(o))}})]})};G.propTypes={item:i.shape({id:i.number.isRequired,img:i.string,make:i.string.isRequired,model:i.string.isRequired,year:i.number.isRequired,rentalPrice:i.string.isRequired,address:i.string.isRequired,rentalCompany:i.string.isRequired,type:i.string.isRequired,engineSize:i.string.isRequired,mileage:i.number.isRequired}),favoriteIcon:i.bool.isRequired};const A=t.ul`
  display: flex;
  width: 320px;
  padding: 20px 23px 30px;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 50px 29px;

  @media (min-width: 768px) and (max-width: 1000px) {
    padding: 30px 84px 50px;
    width: 745px;
  }

  @media (min-width: 1000px) and (max-width: 1200px) {
    padding: 50px 55px 70px;
    width: 990px;
  }
  @media (min-width: 1200px) {
    padding: 50px 5px 100px;
    width: 1194px;
  }
`,J=t.button`
  cursor: pointer;
  border: 0;
  font-size: 16px;
  font-weight: 500;
  color: #3470ff;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`,K=t.p`
  padding: 60px 0 120px;
  font-size: 16px;
  font-weight: 500;
  color: #3470ff;
  line-height: 1.5;
`;export{J as B,A as C,K as E,G as a};
