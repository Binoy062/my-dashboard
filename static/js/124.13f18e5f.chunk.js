"use strict";(self.webpackChunkreact_admin_dashboard=self.webpackChunkreact_admin_dashboard||[]).push([[124],{7124:(e,r,a)=>{a.r(r),a.d(r,{default:()=>l});var s=a(5043),o=a(1094);const d=e=>Array.from({length:e},(()=>({firstName:"John",lastName:"Doe",age:Math.floor(30*Math.random()),visits:Math.floor(100*Math.random())})));var t=a(579);const l=()=>{const e=s.useMemo((()=>d(5)),[]),r=s.useMemo((()=>[{Header:"Name",columns:[{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"}]},{Header:"Info",columns:[{Header:"Age",accessor:"age"},{Header:"Visits",accessor:"visits"}]}]),[]),{getTableProps:a,getTableBodyProps:l,headerGroups:c,rows:n,prepareRow:i}=(0,o.useTable)({columns:r,data:e});return(0,t.jsxs)("table",{...a(),style:{border:"solid 1px blue"},children:[(0,t.jsx)("thead",{children:c.map((e=>(0,t.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,t.jsx)("th",{...e.getHeaderProps(),style:{borderBottom:"solid 3px red",background:"aliceblue",color:"black",fontWeight:"bold"},children:e.render("Header")})))})))}),(0,t.jsx)("tbody",{...l(),children:n.map((e=>(i(e),(0,t.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,t.jsx)("td",{...e.getCellProps(),style:{padding:"10px",border:"solid 1px gray",background:"papayawhip"},children:e.render("Cell")})))}))))})]})}}}]);
//# sourceMappingURL=124.13f18e5f.chunk.js.map