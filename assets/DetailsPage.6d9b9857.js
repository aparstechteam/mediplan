import{T as m}from"./Timer.bad249be.js";import{r as p}from"./auth.c4cc7681.js";import{_ as u}from"./index.ef396462.js";import{r as a,o as s,c as o,b as t,a as c,w as f,G as n,H as r,K as _}from"./vendor.00c30f5f.js";const b={data(){return{r:null,pracq:!1,pracl:!1,pracs:!1,next:null,prev:null}},methods:{startExam(i){this.$swal({icon:"info",title:"\u09B8\u09BE\u09AC\u09A7\u09BE\u09A8!!",text:"\u098F\u0995\u09AC\u09BE\u09B0 \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09BF\u09A4\u09C7 \u09A2\u09C1\u0995\u09B2\u09C7\u0987 \u09A4\u09CB\u09AE\u09BE\u09B0 \u09B8\u09AE\u09DF \u09B6\u09C1\u09B0\u09C1 \u09B9\u09DF\u09C7 \u09AF\u09BE\u09AC\u09C7\u0964"}).then(()=>{this.$router.push(`/exam/${i}`)})},showRank(){new Date(this.r.examstart).getTime()<Date.now()?location.href="https://apars.tech/aparchinmoy21/ranking/"+this.r.exam_id:this.upcomingalert()},solveSheet(){new Date(this.r.examend).getTime()<Date.now()?window.open(this.r.solve_sheet,"_blank"):this.$swal({icon:"warning",title:"Upcomming",text:"Will be available soon."})},async getRoutine(){let l=await(await fetch(p+"&id="+this.$route.params.id)).json();this.r=l.exam}},created(){this.getRoutine()},components:{Timer:m}},x={key:0,class:"container px-2 py-10 mx-auto"},k={class:"flex flex-wrap justify-center h-full"},g={class:"flex-1"},y=["data-plyr-embed-id"],v={class:"max-w-md p-4 space-y-3 font-semibold bangla"},w={class:"mb-2 space-y-2 text-lg"},S={class:"text-2xl font-bold"},D={class:"text-gray-600"},T={key:0,class:"py-4 text-lg"},q={class:"mb-2"},C=t("h3",{class:"text-xl font-extrabold text-emerald-500 ongoing"}," Running Chapter's Remaining Time",-1),B={class:"flex flex-wrap items-center w-full gap-2"},N=["href","title"],P=t("span",{class:"material-icons"},"arrow_back_ios",-1),R=_(" Prev "),V=[P,R],j=["href","title"],E=_(" Next "),L=t("span",{class:"material-icons"},"arrow_forward_ios",-1),M=[E,L],Q={class:"flex gap-4 my-5"},A=["href"],G=["href"],H=["href"],K=["href"],U=["href"],W=["href"],z=["href"],F=["href"],I={key:1,class:"py-20 text-center"},J=t("button",{class:"btn btn-circle loading"},null,-1),O=[J];function X(i,l,Y,Z,e,$){const h=a("vue-plyr"),d=a("Timer");return e.r?(s(),o("div",x,[t("div",k,[t("div",g,[c(h,null,{default:f(()=>[t("div",{"data-plyr-provider":"youtube","data-plyr-embed-id":e.r.video},null,8,y)]),_:1})]),t("div",v,[t("div",w,[t("h1",S,n(e.r.subject)+" | "+n(e.r.chapter),1),t("p",D,n(e.r.instructor),1)]),new Date(e.r.end).getTime()>Date.now()?(s(),o("div",T,[t("h3",null,"Start Time: "+n(new Date(e.r.date).toDateString()),1),t("h3",q,"End Time: "+n(new Date(e.r.end).toDateString()),1),C,c(d,{end:new Date(e.r.end).getTime()},null,8,["end"])])):r("",!0),t("div",B,[e.prev?(s(),o("a",{key:0,class:"btn btn-sucess",href:`/85days/details/${e.prev.id}`,title:e.prev.video_description},V,8,N)):r("",!0),e.next?(s(),o("a",{key:1,class:"btn btn-sucess",href:`/85days/details/${e.next.id}`,title:e.next.video_description},M,8,j)):r("",!0)])])]),t("div",Q,[e.r.lecture_slide?(s(),o("a",{key:0,href:e.r.lecture_slide,target:"_blank",class:"btn"}," Lecture Slide ",8,A)):r("",!0),e.r.annoted_book?(s(),o("a",{key:1,href:e.r.annoted_book,target:"_blank",class:"btn"}," Annotated Book ",8,G)):r("",!0),e.r.mcq_link?(s(),o("a",{key:2,href:e.r.mcq_link,target:"_blank",class:"btn"}," MCQ Link ",8,H)):r("",!0),e.r.Practice_sheet?(s(),o("a",{key:3,href:e.r.Practice_sheet,target:"_blank",class:"btn"}," Practice Sheet ",8,K)):r("",!0),e.r.Solution_Sheet?(s(),o("a",{key:4,href:e.r.Solution_Sheet,target:"_blank",class:"btn"}," Solution Sheet ",8,U)):r("",!0),e.r.mcq_bank?(s(),o("a",{key:5,href:e.r.mcq_bank,target:"_blank",class:"btn"}," MCQ Bank ",8,W)):r("",!0),e.r.leaderboard?(s(),o("a",{key:6,href:e.r.leaderboard,target:"_blank",class:"btn"}," Leaderboard ",8,z)):r("",!0),e.r.mcq_solve?(s(),o("a",{key:7,href:e.r.mcq_solve,target:"_blank",class:"btn"}," MCQ Solve ",8,F)):r("",!0)])])):(s(),o("div",I,O))}var re=u(b,[["render",X]]);export{re as default};
