import{d as c,C as f,h as n,o as a,w as i,e as o,a as u,j as m,b as p,u as e,m as _,i as y,f as d}from"./app-BRXnim6c.js";import{_ as b}from"./TextLink.vue_vue_type_script_setup_true_lang-BeF6Hk5r.js";import{_ as k}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-CfTe-hta.js";import{L as v,_ as g}from"./AuthLayout.vue_vue_type_script_setup_true_lang-DKp_y8CN.js";const h={key:0,class:"mb-4 text-center text-sm font-medium text-green-600"},N=c({__name:"VerifyEmail",props:{status:{}},setup(x){const s=f({}),l=()=>{s.post(route("verification.send"))};return(r,t)=>(a(),n(g,{title:"Verify email",description:"Please verify your email address by clicking on the link we just emailed to you."},{default:i(()=>[o(e(_),{title:"Email verification"}),r.status==="verification-link-sent"?(a(),u("div",h," A new verification link has been sent to the email address you provided during registration. ")):m("",!0),p("form",{onSubmit:y(l,["prevent"]),class:"space-y-6 text-center"},[o(e(k),{disabled:e(s).processing,variant:"secondary"},{default:i(()=>[e(s).processing?(a(),n(e(v),{key:0,class:"h-4 w-4 animate-spin"})):m("",!0),t[0]||(t[0]=d(" Resend verification email "))]),_:1},8,["disabled"]),o(b,{href:r.route("logout"),method:"post",as:"button",class:"mx-auto block text-sm"},{default:i(()=>t[1]||(t[1]=[d(" Log out ")])),_:1},8,["href"])],32)]),_:1}))}});export{N as default};
