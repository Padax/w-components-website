import wc from "@padax/w-components";
wc.init({
  spa:{
    basename:window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"))
  }
});
// manipulate calendar
const calendar=document.querySelector("w-calendar");
calendar.addEntry({date:"2021-05-27", content:"測試看看"});
calendar.addEntry({date:"2021-05-27", content:"測試看看"});
calendar.addEntry({date:"2021-05-20", content:"測試看看"});
// manipulate spa-page
const page=document.querySelector("#heading-page");
page.addEventListener("init", ()=>{
  console.log("Init");
});
page.addEventListener("dispose", ()=>{
  console.log("Dispose");
});