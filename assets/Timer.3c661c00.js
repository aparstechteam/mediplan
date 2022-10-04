import{_ as a}from"./index.b06ba937.js";import{o as d,c as l,b as s,D as i}from"./vendor.7e46d318.js";const _={name:"timer",props:{end:{required:!0}},data(){return{days:0,hours:0,minute:0,second:0}},methods:{showRemaining(){let c=new Date(this.end).getTime();const h=setInterval(()=>{const e=c-Date.now();if(e<0){clearInterval(h);return}const o=Math.floor(e/this._days),t=Math.floor(e%this._days/this._hours),n=Math.floor(e%this._hours/this._minutes),r=Math.floor(e%this._minutes/this._seconds);this.second=r<10?"0"+r:r,this.minute=n<10?"0"+n:n,this.hours=t<10?"0"+t:t,this.days=o<10?"0"+o:o})}},computed:{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24}},mounted(){this.showRemaining()}},m={class:"space-x-3"},u={class:"inline-flex flex-col items-center justify-center w-16 h-16 my-2 text-gray-800 bg-gray-200 dark:bg-white sm:w-20 sm:h-20"},x={class:"text-xl font-bold"},f=s("p",{class:"text-sm"},"days",-1),y={class:"inline-flex flex-col items-center justify-center w-16 h-16 my-2 text-gray-800 bg-gray-200 dark:bg-white sm:w-20 sm:h-20"},g={class:"text-xl font-bold"},p=s("p",{class:"text-sm"},"hours",-1),w={class:"inline-flex flex-col items-center justify-center w-16 h-16 my-2 text-gray-800 bg-gray-200 dark:bg-white sm:w-20 sm:h-20"},b={class:"text-xl font-bold"},v=s("p",{class:"text-sm"},"minutes",-1),k={class:"inline-flex flex-col items-center justify-center w-16 h-16 my-2 text-gray-800 bg-gray-200 dark:bg-white sm:w-20 sm:h-20"},j={class:"text-xl font-bold"},D=s("p",{class:"text-sm"},"seconds",-1);function M(c,h,e,o,t,n){return d(),l("div",m,[s("div",u,[s("h2",x,i(t.days),1),f]),s("div",y,[s("h2",g,i(t.hours),1),p]),s("div",w,[s("h2",b,i(t.minute),1),v]),s("div",k,[s("h2",j,i(t.second),1),D])])}var I=a(_,[["render",M]]);export{I as T};
