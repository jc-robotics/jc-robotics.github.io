import{_ as e}from"./preload-helper-aa6bc0ce.js";const s=(i,a)=>{const t=i[a];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((c,l)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(l.bind(null,new Error("Unknown variable dynamic import: "+a)))})},n=""+new URL("../assets/instagram-3a4f962a.svg",import.meta.url).href,p=""+new URL("../assets/github-b2bdc513.svg",import.meta.url).href,r=i=>({name:"Instagram",username:i,href:`https://www.instagram.com/${i}`,icon:n}),o=i=>({name:"Github",username:i,href:`https://www.github.com/${i}`,icon:p}),_=[{name:"Paul Pounall",intro:"Howdy! I'm Pablo, the Engineer coach. Jamaica College Alumnus."},{name:"Gavin Samuels",intro:"Greetings! I'm Gavin, the Head coach. Jamaica College Alumnus. 8+ years coaching experience."},{name:"Stephanie Williams",socials:[r("_stephnathwill_")],intro:"Hi! I'm Steph, the Team Captain and Engineer. Immaculate Conception High School."},{name:"Ajani Hickling",socials:[o("42-Life"),r("renzu_photos")],intro:"Hi! I'm Ajani (Macbook), I serve as the Deputy Spokesperson and programmer. Coming from American International School of Kingston (AISK)."},{name:"Chelsea Rerrie",socials:[o("cherry-java"),r("cherrysoda.jpeg")],intro:"Hi! I'm Chels. Spokesperson and programmer dabbling in CAD. Coming from Immaculate Conception High School."},{name:"Orville Daley",socials:[o("crypto-cmd"),r("oj.frxst")],intro:"Hey! I'm Orville. Lead Programmer. From Jamaica College. PS: I made the website."}],u=async({id:i})=>{const a=await s(Object.assign({"../assets/images/profiles/ajani-hickling--feat.webp":()=>e(()=>import("./ajani-hickling--feat-fb78161e.js"),[],import.meta.url),"../assets/images/profiles/ajani-hickling.webp":()=>e(()=>import("./ajani-hickling-efeff27d.js"),[],import.meta.url),"../assets/images/profiles/chelsea-rerrie--feat.webp":()=>e(()=>import("./chelsea-rerrie--feat-69d24366.js"),[],import.meta.url),"../assets/images/profiles/chelsea-rerrie.webp":()=>e(()=>import("./chelsea-rerrie-92920b6d.js"),[],import.meta.url),"../assets/images/profiles/gavin-samuels--feat.webp":()=>e(()=>import("./gavin-samuels--feat-d3a1cc07.js"),[],import.meta.url),"../assets/images/profiles/gavin-samuels.webp":()=>e(()=>import("./gavin-samuels-e70857aa.js"),[],import.meta.url),"../assets/images/profiles/orville-daley--feat.webp":()=>e(()=>import("./orville-daley--feat-14962357.js"),[],import.meta.url),"../assets/images/profiles/orville-daley.webp":()=>e(()=>import("./orville-daley-353746a7.js"),[],import.meta.url),"../assets/images/profiles/paul-pounall--feat.webp":()=>e(()=>import("./paul-pounall--feat-82b1252d.js"),[],import.meta.url),"../assets/images/profiles/paul-pounall.webp":()=>e(()=>import("./paul-pounall-6351716c.js"),[],import.meta.url),"../assets/images/profiles/stephanie-williams--feat.webp":()=>e(()=>import("./stephanie-williams--feat-7947d459.js"),[],import.meta.url),"../assets/images/profiles/stephanie-williams.webp":()=>e(()=>import("./stephanie-williams-88e5bd49.js"),[],import.meta.url)}),`../assets/images/profiles/${i}.webp`),t=await s(Object.assign({"../assets/images/profiles/ajani-hickling--feat.webp":()=>e(()=>import("./ajani-hickling--feat-fb78161e.js"),[],import.meta.url),"../assets/images/profiles/chelsea-rerrie--feat.webp":()=>e(()=>import("./chelsea-rerrie--feat-69d24366.js"),[],import.meta.url),"../assets/images/profiles/gavin-samuels--feat.webp":()=>e(()=>import("./gavin-samuels--feat-d3a1cc07.js"),[],import.meta.url),"../assets/images/profiles/orville-daley--feat.webp":()=>e(()=>import("./orville-daley--feat-14962357.js"),[],import.meta.url),"../assets/images/profiles/paul-pounall--feat.webp":()=>e(()=>import("./paul-pounall--feat-82b1252d.js"),[],import.meta.url),"../assets/images/profiles/stephanie-williams--feat.webp":()=>e(()=>import("./stephanie-williams--feat-7947d459.js"),[],import.meta.url)}),`../assets/images/profiles/${i}--feat.webp`);return{imageUrl:a.default,featImageUrl:t.default}},m=await Promise.all(_.map(async i=>{const a=i.name.toLowerCase().replace(/ /g,"-");return{id:a,...i,...await u({id:a})}})),f=({id:i})=>{const a=m.find(t=>t.id===i);if(!a)throw console.log(`Profile with id ${i} not found`),console.log(m),new Error(`Profile not found: ${i}`);return a};export{s as _,f as g};
