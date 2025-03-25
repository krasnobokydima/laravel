import{d as f,h as g,o as p,u as e,z as k,A as P,w as a,r as _,c as B,e as s,k as D,b as u,a as y,q as V,v as U,C as S,f as m,n as A,m as I,i as N,j as C,P as T,T as q,x as M,y as X}from"./app-BRXnim6c.js";import{a as E,_ as j}from"./Layout.vue_vue_type_script_setup_true_lang-Dt7Anb88.js";import{_ as x,a as $,b as h}from"./Label.vue_vue_type_script_setup_true_lang-CV71jREW.js";import{S as O,n as H,X as z,I as K,$ as R,P as W,a as v,O as F,d as Y,B as G,o as J,_ as b}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-CfTe-hta.js";import{X as L,_ as Q}from"./AppLayout.vue_vue_type_script_setup_true_lang-CT7-uFFQ.js";import"./index-M3xfSDnl.js";const Z=f({__name:"Dialog",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(d,{emit:l}){const r=O(d,l);return(c,t)=>(p(),g(e(H),k(P(e(r))),{default:a(()=>[_(c.$slots,"default")]),_:3},16))}}),ee=f({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(d){const l=d;return(o,i)=>(p(),g(e(z),k(P(l)),{default:a(()=>[_(o.$slots,"default")]),_:3},16))}}),se=f({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(d,{emit:l}){const o=d,i=l,r=B(()=>{const{class:t,...n}=o;return n}),c=O(r,i);return(t,n)=>(p(),g(e(K),null,{default:a(()=>[s(e(R),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),s(e(W),D(e(c),{class:e(v)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",o.class)}),{default:a(()=>[_(t.$slots,"default"),s(e(z),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:a(()=>[s(e(L),{class:"h-4 w-4"}),n[0]||(n[0]=u("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),te=f({__name:"DialogDescription",props:{asChild:{type:Boolean},as:{},class:{}},setup(d){const l=d,o=B(()=>{const{class:r,...c}=l;return c}),i=F(o);return(r,c)=>(p(),g(e(Y),D(e(i),{class:e(v)("text-sm text-muted-foreground",l.class)}),{default:a(()=>[_(r.$slots,"default")]),_:3},16,["class"]))}}),ae=f({__name:"DialogFooter",props:{class:{}},setup(d){const l=d;return(o,i)=>(p(),y("div",{class:V(e(v)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",l.class))},[_(o.$slots,"default")],2))}}),oe=f({__name:"DialogHeader",props:{class:{}},setup(d){const l=d;return(o,i)=>(p(),y("div",{class:V(e(v)("flex flex-col gap-y-1.5 text-center sm:text-left",l.class))},[_(o.$slots,"default")],2))}}),le=f({__name:"DialogTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(d){const l=d,o=B(()=>{const{class:r,...c}=l;return c}),i=F(o);return(r,c)=>(p(),g(e(G),D(e(i),{class:e(v)("text-lg font-semibold leading-none tracking-tight",l.class)}),{default:a(()=>[_(r.$slots,"default")]),_:3},16,["class"]))}}),re=f({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(d){const l=d;return(o,i)=>(p(),g(e(J),k(P(l)),{default:a(()=>[_(o.$slots,"default")]),_:3},16))}}),ne={class:"space-y-6"},de={class:"space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10"},ie={class:"grid gap-2"},ue=f({__name:"DeleteUser",setup(d){const l=U(null),o=S({password:""}),i=c=>{c.preventDefault(),o.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>r(),onError:()=>{var t;return(t=l.value)==null?void 0:t.focus()},onFinish:()=>o.reset()})},r=()=>{o.clearErrors(),o.reset()};return(c,t)=>(p(),y("div",ne,[s(E,{title:"Delete account",description:"Delete your account and all of its resources"}),u("div",de,[t[7]||(t[7]=u("div",{class:"relative space-y-0.5 text-red-600 dark:text-red-100"},[u("p",{class:"font-medium"},"Warning"),u("p",{class:"text-sm"},"Please proceed with caution, this cannot be undone.")],-1)),s(e(Z),null,{default:a(()=>[s(e(re),{"as-child":""},{default:a(()=>[s(e(b),{variant:"destructive"},{default:a(()=>t[1]||(t[1]=[m("Delete account")])),_:1})]),_:1}),s(e(se),null,{default:a(()=>[u("form",{class:"space-y-6",onSubmit:i},[s(e(oe),{class:"space-y-3"},{default:a(()=>[s(e(le),null,{default:a(()=>t[2]||(t[2]=[m("Are you sure you want to delete your account?")])),_:1}),s(e(te),null,{default:a(()=>t[3]||(t[3]=[m(" Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ")])),_:1})]),_:1}),u("div",ie,[s(e(x),{for:"password",class:"sr-only"},{default:a(()=>t[4]||(t[4]=[m("Password")])),_:1}),s(e($),{id:"password",type:"password",name:"password",ref_key:"passwordInput",ref:l,modelValue:e(o).password,"onUpdate:modelValue":t[0]||(t[0]=n=>e(o).password=n),placeholder:"Password"},null,8,["modelValue"]),s(h,{message:e(o).errors.password},null,8,["message"])]),s(e(ae),{class:"gap-2"},{default:a(()=>[s(e(ee),{"as-child":""},{default:a(()=>[s(e(b),{variant:"secondary",onClick:r},{default:a(()=>t[5]||(t[5]=[m(" Cancel ")])),_:1})]),_:1}),s(e(b),{variant:"destructive",disabled:e(o).processing},{default:a(()=>t[6]||(t[6]=[u("button",{type:"submit"},"Delete account",-1)])),_:1},8,["disabled"])]),_:1})],32)]),_:1})]),_:1})])]))}}),ce={class:"flex flex-col space-y-6"},pe={class:"grid gap-2"},me={class:"grid gap-2"},fe={key:0},_e={class:"-mt-4 text-sm text-muted-foreground"},ge={key:0,class:"mt-2 text-sm font-medium text-green-600"},ye={class:"flex items-center gap-4"},ve={class:"text-sm text-neutral-600"},Pe=f({__name:"Profile",props:{mustVerifyEmail:{type:Boolean},status:{}},setup(d){const l=[{title:"Profile settings",href:"/settings/profile"}],i=A().props.auth.user,r=S({name:i.name,email:i.email}),c=()=>{r.patch(route("profile.update"),{preserveScroll:!0})};return(t,n)=>(p(),g(Q,{breadcrumbs:l},{default:a(()=>[s(e(I),{title:"Profile settings"}),s(j,null,{default:a(()=>[u("div",ce,[s(E,{title:"Profile information",description:"Update your name and email address"}),u("form",{onSubmit:N(c,["prevent"]),class:"space-y-6"},[u("div",pe,[s(e(x),{for:"name"},{default:a(()=>n[2]||(n[2]=[m("Name")])),_:1}),s(e($),{id:"name",class:"mt-1 block w-full",modelValue:e(r).name,"onUpdate:modelValue":n[0]||(n[0]=w=>e(r).name=w),required:"",autocomplete:"name",placeholder:"Full name"},null,8,["modelValue"]),s(h,{class:"mt-2",message:e(r).errors.name},null,8,["message"])]),u("div",me,[s(e(x),{for:"email"},{default:a(()=>n[3]||(n[3]=[m("Email address")])),_:1}),s(e($),{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(r).email,"onUpdate:modelValue":n[1]||(n[1]=w=>e(r).email=w),required:"",autocomplete:"username",placeholder:"Email address"},null,8,["modelValue"]),s(h,{class:"mt-2",message:e(r).errors.email},null,8,["message"])]),t.mustVerifyEmail&&!e(i).email_verified_at?(p(),y("div",fe,[u("p",_e,[n[5]||(n[5]=m(" Your email address is unverified. ")),s(e(T),{href:t.route("verification.send"),method:"post",as:"button",class:"text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:!decoration-current dark:decoration-neutral-500"},{default:a(()=>n[4]||(n[4]=[m(" Click here to resend the verification email. ")])),_:1},8,["href"])]),t.status==="verification-link-sent"?(p(),y("div",ge," A new verification link has been sent to your email address. ")):C("",!0)])):C("",!0),u("div",ye,[s(e(b),{disabled:e(r).processing},{default:a(()=>n[6]||(n[6]=[m("Save")])),_:1},8,["disabled"]),s(q,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:a(()=>[M(u("p",ve,"Saved.",512),[[X,e(r).recentlySuccessful]])]),_:1})])],32)]),s(ue)]),_:1})]),_:1}))}});export{Pe as default};
