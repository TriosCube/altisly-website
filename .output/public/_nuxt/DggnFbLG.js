import{d as w,u as k,c as a,e as o,b as e,w as l,F as m,r as _,t as n,q as c,o as r,l as C,_ as A,f as g,n as p,i as P,m as S,C as I}from"./CmbS6nHj.js";import{_ as j}from"./DEW9kXhM.js";import{_ as B}from"./BGhTkkly.js";const R={class:"py-20 bg-white"},E={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},L={class:"flex flex-col lg:flex-row gap-12 items-start"},M={class:"lg:w-2/5"},N={class:"space-y-3"},T=["onClick"],V={class:"text-xl"},H={class:"font-medium text-navy-900 text-sm"},$={key:0,class:"w-4 h-4 text-brand-600 ml-auto",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},K={class:"flex-1 bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden"},Y={class:"flex items-center gap-2 px-5 py-3 border-b border-gray-200"},D={class:"text-gray-500 text-xs ml-3"},F={class:"p-6 font-mono text-sm overflow-x-auto"},q={class:"text-gray-700 leading-relaxed whitespace-pre-wrap"},G={class:"py-20 bg-brand-50"},z={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},O={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"},U=["d"],J={class:"font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors"},Q={class:"text-sm text-gray-600 leading-relaxed"},oe=w({__name:"index",setup(W){k({title:"Developers | Altisry",description:"Build with Altisry. REST API, SDKs, documentation, and sandbox environment. Get started in minutes."});const i=I("Node.js"),b=[{name:"Node.js",emoji:"🟩"},{name:"Python",emoji:"🐍"},{name:"Ruby",emoji:"💎"},{name:"PHP",emoji:"🐘"}],u={"Node.js":{filename:"connect.js",code:`const Altisry = require('@altisry/sdk');

const client = new Altisry({
  apiKey: process.env.ALTISRY_API_KEY
});

// Create a connect session
const session = await client.connectSessions.create({
  customerId: 'cust_12345',
  consent: ['account_details', 'transactions'],
  returnTo: 'https://yourapp.com/callback'
});

console.log(session.connectUrl);
// → https://connect.altisry.co/...`},Python:{filename:"connect.py",code:`import altisry

client = altisry.Client(
    api_key=os.environ['ALTISRY_API_KEY']
)

# Create a connect session
session = client.connect_sessions.create(
    customer_id='cust_12345',
    consent=['account_details', 'transactions'],
    return_to='https://yourapp.com/callback'
)

print(session.connect_url)
# → https://connect.altisry.co/...`},Ruby:{filename:"connect.rb",code:`require 'altisry'

client = Altisry::Client.new(
  api_key: ENV['ALTISRY_API_KEY']
)

# Create a connect session
session = client.connect_sessions.create(
  customer_id: 'cust_12345',
  consent: %w[account_details transactions],
  return_to: 'https://yourapp.com/callback'
)

puts session.connect_url
# → https://connect.altisry.co/...`},PHP:{filename:"connect.php",code:`<?php
use Altisry\\Client;

$client = new Client([
    'api_key' => getenv('ALTISRY_API_KEY')
]);

// Create a connect session
$session = $client->connectSessions->create([
    'customer_id' => 'cust_12345',
    'consent' => ['account_details', 'transactions'],
    'return_to' => 'https://yourapp.com/callback'
]);

echo $session->connect_url;
// → https://connect.altisry.co/...`}},x=[{title:"API Reference",description:"Complete reference documentation for all Altisry API endpoints with examples.",icon:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",iconBg:"bg-blue-100",iconColor:"text-blue-600",href:"/developers/api"},{title:"Guides & Tutorials",description:"Step-by-step guides for common integration patterns and use cases.",icon:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",iconBg:"bg-green-100",iconColor:"text-green-600",href:"/developers/docs"},{title:"Sandbox Environment",description:"Full test environment with mock bank connections. No real data, no risk.",icon:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",iconBg:"bg-purple-100",iconColor:"text-purple-600",href:"/developers/sandbox"},{title:"Webhooks",description:"Set up real-time event notifications for account and transaction updates.",icon:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",iconBg:"bg-yellow-100",iconColor:"text-yellow-600",href:"/developers/api"},{title:"SDKs & Libraries",description:"Official client libraries for Node.js, Python, Ruby, PHP, Java, and .NET.",icon:"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",iconBg:"bg-brand-100",iconColor:"text-brand-600",href:"/developers/docs"},{title:"Changelog",description:"Stay up to date with the latest API changes, new features, and deprecations.",icon:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4",iconBg:"bg-orange-100",iconColor:"text-orange-600",href:"/developers/docs"}];return(X,t)=>{const h=C,d=A,y=j,v=B,f=S;return r(),a("div",null,[o(h),e("main",null,[o(y,{tag:"Developers",title:"For developers with love",description:"Clear documentation, a full sandbox environment, and SDKs in every major language. Integrate Altisry in hours, not weeks."},{cta:l(()=>[o(d,{to:"/get-started",class:"btn-primary text-base px-8 py-4"},{default:l(()=>[...t[0]||(t[0]=[g("Get API keys",-1)])]),_:1}),o(d,{to:"/developers/docs",class:"btn-outline-white text-base px-8 py-4"},{default:l(()=>[...t[1]||(t[1]=[g("Read the docs",-1)])]),_:1})]),_:1}),e("section",R,[e("div",E,[e("div",L,[e("div",M,[t[3]||(t[3]=e("p",{class:"section-label"},"Quick start",-1)),t[4]||(t[4]=e("h2",{class:"section-title mb-5"},"Up and running in minutes",-1)),t[5]||(t[5]=e("p",{class:"section-subtitle mb-8"}," Our REST API is intuitive and well-documented. Pick your language and start building. ",-1)),e("div",N,[(r(),a(m,null,_(b,s=>e("button",{key:s.name,onClick:Z=>i.value=s.name,class:p(["w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left",c(i)===s.name?"border-brand-400 bg-brand-50":"border-gray-200 hover:border-gray-300"])},[e("span",V,n(s.emoji),1),e("span",H,n(s.name),1),c(i)===s.name?(r(),a("svg",$,[...t[2]||(t[2]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)])])):P("",!0)],10,T)),64))])]),e("div",K,[e("div",Y,[t[6]||(t[6]=e("div",{class:"w-3 h-3 rounded-full bg-red-500"},null,-1)),t[7]||(t[7]=e("div",{class:"w-3 h-3 rounded-full bg-yellow-500"},null,-1)),t[8]||(t[8]=e("div",{class:"w-3 h-3 rounded-full bg-green-500"},null,-1)),e("span",D,n(u[c(i)]?.filename),1)]),e("div",F,[e("pre",q,n(u[c(i)]?.code),1)])])])])]),e("section",G,[e("div",z,[t[9]||(t[9]=e("div",{class:"text-center mb-14"},[e("p",{class:"section-label"},"Resources"),e("h2",{class:"section-title mb-5"},"Everything you need to build")],-1)),e("div",O,[(r(),a(m,null,_(x,s=>o(d,{key:s.title,to:s.href,class:"card hover:shadow-lg hover:border-brand-400 transition-all group"},{default:l(()=>[e("div",{class:p(["w-11 h-11 rounded-xl flex items-center justify-center mb-4",s.iconBg])},[(r(),a("svg",{class:p(["w-5 h-5",s.iconColor]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:s.icon},null,8,U)],2))],2),e("h3",J,n(s.title),1),e("p",Q,n(s.description),1)]),_:2},1032,["to"])),64))])])]),o(v,{title:"Ready to start building?",subtitle:"Get your API keys and access the sandbox — no credit card required."})]),o(f)])}}});export{oe as default};
