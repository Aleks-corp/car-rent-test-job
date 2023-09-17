import{h as t,P as e,j as i,G as c,u as C,n as k,k as q,o as R,p as z,q as I,t as $,v as T}from"./main-a60069a5.js";const L=t.li`
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
`,p=t.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`,D=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
`,d=t.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  word-spacing: 2px;
`,E=t.button`
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
`,l=({title:n,type:o,onClick:s})=>i.jsx(E,{type:o,onClick:s,children:n});l.propTypes={title:e.string.isRequired,type:e.string.isRequired,onClick:e.func};function W(n){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(n)}function G(n){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(n)}const H=({item:n,favoriteIcon:o})=>{const s=C(k),{img:a,make:x,model:g,year:h,rentalPrice:u,address:m,rentalCompany:f,type:b,engineSize:w,mileage:j}=n,v=m.split(", ").slice(1,3).join(" | "),y=j.toLocaleString("en-IN"),r=q();return i.jsxs(L,{children:[i.jsxs(B,{children:[i.jsx(M,{src:a||R}),i.jsx(F,{}),i.jsx(S,{type:"button",onClick:o?()=>r(I(n.id)):()=>r(z(n)),children:o?i.jsx(G,{}):i.jsx(W,{})})]}),i.jsxs(P,{children:[i.jsx(p,{children:`${x}, ${h}`}),i.jsx(p,{children:u})]}),i.jsxs(D,{children:[i.jsx(d,{children:`${v} | ${f}`}),i.jsx(d,{children:`${b}  |  ${g}  |  ${w}  |  ${y}`})]}),i.jsx(l,{title:"Learn more",type:"button",onClick:()=>{r($(!s)),r(T(n))}})]})};H.propTypes={item:e.shape({id:e.number.isRequired,img:e.string,make:e.string.isRequired,model:e.string.isRequired,year:e.number.isRequired,rentalPrice:e.string.isRequired,address:e.string.isRequired,rentalCompany:e.string.isRequired,type:e.string.isRequired,engineSize:e.string.isRequired,mileage:e.number.isRequired}),favoriteIcon:e.bool.isRequired};const A=t.ul`
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
`;export{J as B,A as C,K as E,H as a};
