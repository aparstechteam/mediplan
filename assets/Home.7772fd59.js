var E=Object.defineProperty,B=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var v=(o,e,t)=>e in o?E(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,b=(o,e)=>{for(var t in e||(e={}))V.call(e,t)&&v(o,t,e[t]);if(g)for(var t of g(e))H.call(e,t)&&v(o,t,e[t]);return o},w=(o,e)=>B(o,R(e));import{T as I}from"./Timer.3c661c00.js";import{_ as N,r as A}from"./index.b06ba937.js";import{r as x,o as a,c as l,b as i,x as f,y as m,z as y,A as j,B as F,C as K,a as S,D as n,w as D,G as C,H as k,I as T,J as z}from"./vendor.7e46d318.js";const G={data(){return{routine:[],allchapters:[],upcomings:[],papers:new Set,subjects:new Set,instructors:new Set,chapters:new Set,paper:"all",chapter:"all",subject:"all",instructor:"all",exam:!1}},methods:{groupBy(o,e){return o.reduce(function(t,d){return(t[d[e]]=t[d[e]]||[]).push(d),t},{})},async getRoutine(){let e=await(await fetch(A)).json();this.routine=e.routines.map((r,u)=>w(b({},r),{class_sl:`Day ${u+1}`,groupKey:`${r.subject} ${r.paper} ${r.chapter}`}));let t=this.groupBy(this.routine,"groupKey"),d=[];for(const r in t)d.push({title:r,chapter:t[r][0].chapter,subject:t[r][0].subject,date:t[r][0].date,end:t[r][0].end,video:t[r][0].video});this.allchapters=d,this.routine=d,this.setFilterCriterias();let h=this.allchapters.sort((r,u)=>r.id-u.id).filter(r=>new Date(r.end).getTime()>=Date.now());this.upcomings=[b({},h[0])];for(let r=1;r<6;r++)h[r]&&h[0].date==h[r].date&&this.upcomings.push(b({},h[r]));this.upcomings=this.upcomings.sort((r,u)=>r.id-u.id)},setFilterCriterias(){this.routine.forEach(o=>{o.paper&&this.papers.add(o.paper),o.subject&&this.subjects.add(o.subject),o.chapter&&this.chapters.add(o.chapter),o.instructor&&this.instructors.add(o.instructor)}),this.subjects=[...this.subjects].sort(),this.chapters=[...this.chapters].sort()},filterRoutine(o){let e=this.allchapters;this.subject!="all"&&(e=e.filter(t=>t.subject==this.subject)),o=="sub"&&(this.papers=new Set,this.chapters=new Set,this.instructors=new Set,e.forEach(t=>{t.paper&&this.papers.add(t.paper),t.chapter&&this.chapters.add(t.chapter),t.instructor&&this.instructors.add(t.instructor)}),this.paper="all",this.chapter="all",this.instructor="all"),this.paper!="all"&&(e=e.filter(t=>t.paper==this.paper)),o=="paper"&&(this.chapters=new Set,this.instructors=new Set,e.forEach(t=>{t.chapter&&this.chapters.add(t.chapter),t.instructor&&this.instructors.add(t.instructor)}),this.chapter="all",this.instructor="all"),this.chapter!="all"&&(e=e.filter(t=>t.chapter==this.chapter)),o=="chapter"&&(this.instructors=new Set,e.forEach(t=>{t.instructor&&this.instructors.add(t.instructor)}),this.instructor="all"),this.instructor!="all"&&(e=e.filter(t=>t.instructor==this.instructor)),this.routine=e,this.routine.length==0&&(this.routine=this.allchapters)}},created(){this.getRoutine()},components:{Timer:I}},p=o=>(F("data-v-8b71807a"),o=o(),K(),o),U={key:0,class:"container px-2 py-10 mx-auto"},$={class:"mx-auto md:w-1/2"},q={key:0,class:"p-4 mx-auto my-3 space-y-4 text-xl font-semibold text-center border border-dashed rounded bg-gray-50 bangla"},J=p(()=>i("h3",{class:"text-3xl font-extrabold text-emerald-500 ongoing"},"Running Chapter's Remaining Time",-1)),L={class:"max-w-md mx-auto"},M={class:"text-2xl font-bold"},P={class:"text-lg"},O=z("View Content"),Q={class:"flex flex-wrap items-center justify-center gap-3 my-5"},W={class:"w-full max-w-sm form-control"},X=p(()=>i("label",{class:"label"},[i("span",{class:"label-text"},"Subject")],-1)),Y=p(()=>i("option",{disabled:"",selected:"",value:""},"Select Paper",-1)),Z=p(()=>i("option",{value:"all"},"All",-1)),tt=["value"],et={class:"w-full max-w-sm form-control"},st=p(()=>i("label",{class:"label"},[i("span",{class:"label-text"},"Chapter")],-1)),ot=p(()=>i("option",{disabled:"",selected:"",value:""},"Select Chapter",-1)),it=p(()=>i("option",{value:"all"},"All",-1)),rt=["value"],at={class:"grid items-center grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"},lt={key:0,class:"overflow-hidden rounded aspect-video"},nt=["src"],ct={key:1,class:"flex items-center justify-center w-full h-full text-2xl text-white rounded aspect-video bg-gradient-to-r from-gray-700 via-gray-900 to-black bangla"},dt={key:2,class:"flex flex-col justify-between pb-3 sm:flex-row sm:pb-0"},ht={class:"p-5 font-semibold bangla"},ut={key:0},pt={key:1},_t={class:"grid grid-cols-2 gap-3 mt-3 text-xs"},bt={class:"p-2 border border-dashed shadow bg-gray-50 border-slate-300"},ft={class:"p-2 border border-dashed shadow bg-gray-50 border-slate-300"},mt={key:1,class:"py-20 text-center"},gt=p(()=>i("button",{class:"btn btn-circle loading"},null,-1)),vt=[gt];function wt(o,e,t,d,c,h){const r=x("Timer"),u=x("router-link");return c.routine.length>0?(a(),l("div",U,[i("div",$,[(a(!0),l(f,null,m(c.upcomings,(s,_)=>(a(),l("div",{key:_},[s.subject?(a(),l("div",q,[J,i("div",L,[S(r,{end:new Date(s.end).getTime()},null,8,["end"])]),i("p",M,n(s.subject)+" | "+n(s.chapter),1),i("div",P,[i("h3",null,"Start Time: "+n(new Date(s.date).toDateString()),1),i("h3",null,"End Time: "+n(new Date(s.end).toDateString()),1)]),S(u,{to:`/chapter/${s.title}`,class:"btn btn-success"},{default:D(()=>[O]),_:2},1032,["to"])])):C("",!0)]))),128))]),i("div",Q,[i("div",W,[X,y(i("select",{"onUpdate:modelValue":e[0]||(e[0]=s=>c.subject=s),onChange:e[1]||(e[1]=s=>h.filterRoutine("sub")),class:"select select-bordered"},[Y,Z,(a(!0),l(f,null,m(c.subjects,(s,_)=>(a(),l("option",{key:_,value:s},n(s),9,tt))),128))],544),[[j,c.subject]])]),i("div",et,[st,y(i("select",{class:"select select-bordered","onUpdate:modelValue":e[2]||(e[2]=s=>c.chapter=s),onChange:e[3]||(e[3]=s=>h.filterRoutine("chapter"))},[ot,it,(a(!0),l(f,null,m(c.chapters,(s,_)=>(a(),l("option",{key:_,value:s},n(s),9,rt))),128))],544),[[j,c.chapter]])])]),i("div",at,[(a(!0),l(f,null,m(c.routine,(s,_)=>(a(),k(u,{tag:"div",key:_,to:`/chapter/${s.title}`,class:T({"pointer-events-none":!s.video})},{default:D(()=>[i("div",{class:T(["relative transition-all duration-200 border border-gray-200 border-dashed rounded shadow hover:border-2 hover:border-blue-400",{"pointer-events-none":!s.video}])},[s.video?(a(),l("div",lt,[i("img",{src:`https://img.youtube.com/vi/${s.video.substr(17)}/hqdefault.jpg`,class:"w-full mx-auto -my-8"},null,8,nt)])):(a(),l("div",ct," Holiday")),s.subject!="Holiday"?(a(),l("div",dt,[i("div",ht,[s.subject!="GK"||s.subject!="English"?(a(),l("p",ut,n(s.subject)+" | "+n(s.chapter),1)):(a(),l("p",pt,n(s.subject),1)),i("h1",null,n(s.video_description),1),i("div",_t,[i("h3",bt,"Start: "+n(new Date(s.date).toDateString()),1),i("h3",ft,"End: "+n(new Date(s.end).toDateString()),1)])])])):C("",!0)],2)]),_:2},1032,["to","class"]))),128))])])):(a(),l("div",mt,vt))}var Dt=N(G,[["render",wt],["__scopeId","data-v-8b71807a"]]);export{Dt as default};
