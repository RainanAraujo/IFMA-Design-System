import{j as r}from"./jsx-runtime-j_jdvEMj.js";import{c as o}from"./cn-DHkRjjEP.js";import{L as d}from"./Label-B4RhECvQ.js";import{S as p}from"./Select-BdtfjmbV.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./IconBase-BiRCNEL7.js";import"./Input-BfFmV5y9.js";function s({className:t,...e}){return r.jsxs("div",{className:o(t),children:[r.jsx(d,{required:e.required,htmlFor:e.label,className:"mb-1",children:e.label}),r.jsx(p,{...e}),r.jsx("span",{className:"text-red-500 text-xSmall",children:e.error})]})}s.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{className:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string;
  label: string;
}`,signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"option[]"},description:""},label:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"Molecules/SelectField",component:s,parameters:{layout:"centered"},argTypes:{className:{control:!1},options:{control:!1}},args:{label:"Label"}},a={render:t=>r.jsx(s,{...t,options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}]})};var l,n,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <SelectField {...args} options={[{
    value: "1",
    label: "Option 1"
  }, {
    value: "2",
    label: "Option 2"
  }, {
    value: "3",
    label: "Option 3"
  }]} />
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const v=["Default"];export{a as Default,v as __namedExportsOrder,x as default};
