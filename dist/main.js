(()=>{"use strict";class e{constructor(e,t){this.name=e,this.button=t}}class t{constructor(e,t,n,a,r,l){this.frequency=e,this.id=t,this.difficulty=n,this.problemUrl=a,this.problemName=r,this.acceptance=l}}class n extends t{constructor(e,t,n,a,r,l,o,i){super(e,t,n,a,r,l),this.companyName=o,this.duration=i}}class a{constructor(){self.data={}}getData(){return self.data}getList(e){return e in self.data?self.data[e]:[]}appendData(e,t){e in self.data?self.data[e].push(t):self.data[e]=[t]}}class r{static SIXMONTHS="6 months";static TWOYEARS="2 years";static ALLTIME="All time";static ONEYEAR="1 year"}function l(){function e(e){let t=document.createElement("div"),n=document.createElement("h3");return n.textContent=e,n.style="color: black;\n        text-align: center;\n        ",t.appendChild(n),t}function t(t){let n=e(t);return n.style="\n       width: 5%\n       ",n}function n(e){let t=document.createElement("div");t.setAttribute("title",String(Math.round(100*e))+"%"),t.style="\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: #e9ecef;\n        border-radius: 0.25rem;\n        margin-top: auto;\n        margin-bottom: auto;\n        width:10%; \n        ";let n=document.createElement("div");return n.style=`\n        height:100%; \n        width:${100*e}%; \n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        overflow: hidden;\n        color: #fff;\n        background-color: #0d6efd;\n        `,t.appendChild(n),t}function a(e,t){let n=document.createElement("div"),a=document.createElement("a");return a.href=t,a.textContent=e,n.appendChild(a),n.style="\n        width: 50%\n        ",n}function r(t){let n=e(t);return n.style="\n        width: 12%\n        ",n}function l(t){let n=e(Math.round(100*t)+"%");return n.style="\n        width: 10%\n        ",n}function o(){let e=document.createElement("div");return e.style="\n        display:flex;\n        border-top: solid 1px black;\n        ",e}this.getTableHeaderElement=function(){let e=o(),n=t("#"),l=a("Title","#"),i=r("Acceptance"),s=r("Difficulty"),d=r("Frequency");return n.setAttribute("role","modal-header"),l.setAttribute("role","modal-header"),i.setAttribute("role","modal-header"),s.setAttribute("role","modal-header"),d.setAttribute("role","modal-header"),e.appendChild(n),e.appendChild(l),e.appendChild(i),e.appendChild(s),e.appendChild(d),e},this.getTableContentElement=function(e,...i){let s=document.createElement("div");for(let i=0;i<=e.length-1;i++){let d=o(),h=e[i].frequency,m=e[i].id,c=e[i].difficulty,u=e[i].problemUrl,p=e[i].problemName,b=e[i].acceptance;d.appendChild(t(m)),d.appendChild(a(p,u)),d.appendChild(l(b)),d.appendChild(r(c)),d.appendChild(n(h)),s.append(d)}return s.id="table-content",s}}class o{constructor(e,t){this.parentElement=t,this.tableId="table-content",this.tableData=e,this.elementGenerator=new l}generateDurationButton(e){let t=document.createElement("button");return t.innerText=e,t.style=" \n        width:5%\n        ",t.setAttribute("duration",e),t.addEventListener("click",this.onDurationButtonClicked),t}generateRowDiv(){let e=document.createElement("div");return e.style="\n        display:flex;\n        border-top: solid 1px black;\n        ",e}generateDurationButtons(){let e=this.generateRowDiv();return e.appendChild(this.generateDurationButton(r.SIXMONTHS)),e.appendChild(this.generateDurationButton(r.ONEYEAR)),e.appendChild(this.generateDurationButton(r.TWOYEARS)),e.appendChild(this.generateDurationButton(r.ALLTIME)),e}test(){this.parentElement.appendChild(this.getContentElement())}getContentElement(){let e=document.createElement("div"),t=this.tableData.getList(r.ALLTIME),n=this.elementGenerator.getTableHeaderElement(),a=this.elementGenerator.getTableContentElement(t);return e.appendChild(this.generateDurationButtons()),e.appendChild(n),e.appendChild(a),e}onDurationButtonClicked=e=>{this.swapTable(e.currentTarget.getAttribute("duration"))};swapTable=e=>{null!=document.getElementById(this.tableId)&&document.getElementById(this.tableId).remove();let t=this.tableData.getList(e),n=this.elementGenerator.getTableContentElement(t);this.parentElement.appendChild(n)}}var i=new class{constructor(){this.modal=this.createModal(),this.modalContentBox=this.createModalContentBox(),this.appendToModal(this.modalContentBox),this.appendModal(document.body)}createModalContentBox(){let e=document.createElement("div");return e.style="\n        background-color: #fefefe;\n        margin-top:1%; \n        margin-left: auto;\n        margin-right: auto;\n        padding: 20px;\n        width: 80%;\n        mid-height: 15%\n        ",e}getModalContentBox(){return this.modalContentBox}appendModal(e){e.appendChild(this.modal)}appendToModal(e){this.modal.appendChild(e)}appendToContainer(e){this.modalContentBox.appendChild(e)}createCloseButton(){let e=document.createElement("span");return e.style=" \n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n        cursor: pointer;\n        ",e.innerText="x",e.addEventListener("click",resetModal),e}createModal(){let e=document.createElement("div");return e.style=" \n        display: none; \n        position: fixed; \n        z-index: 32;\n        left: 0;\n        top: 0;\n        width: 100%; \n        height: 100%; \n        overflow: auto; \n        ",window.addEventListener("click",this.onModalClicked),e.id="CompanyModal",e}openModal(){this.modal.style.display=""}closeModal(){this.modal.style.display="none"}clearModalContent(){for(;null!=this.modalContentBox.firstChild;)this.modalContentBox.firstChild.remove()}onModalClicked=e=>{e.target==this.modal&&this.resetModal()};resetModal=()=>{this.closeModal(),this.clearModalContent()}},s=new function(){function t(e){var a=document.getElementsByClassName("mt-0")[0];const r=new MutationObserver((()=>{n(e)}));a?r.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}):window.setTimeout((()=>{t()}),500)}function n(t){let n=function(){let t=[],n=document.getElementsByClassName("swiper-slide-active"),a=n[n.length-1].getElementsByTagName("a");for(let n=0;n<=a.length-1;n++){let r=a[n].firstChild.firstChild.textContent.toLowerCase(),l=new e(r,a[n]);a[n].href="javascript:void(0)",t.push(l)}return t}();for(let e=0;e<=n.length-1;e++){let a=n[e].name;if(1!=n[e].button.getAttribute("listener-registered")){n[e].button.setAttribute("listener-registered","true"),n[e].button.setAttribute("company-name",a);for(let a=0;a<=t.length-1;a++)n[e].button.addEventListener("click",t[a])}}}this.onCompanyButtonClick=[],this.injectFunctionOnElementVisible=function(e){this.onCompanyButtonClick.push(e)},this.modifyElement=function(){n(this.onCompanyButtonClick),t(this.onCompanyButtonClick)}},d=new class{constructor(){this.sheetsId="1hW-bfeFKSkEDzfjaDMjDQmgsupEZz3gysXpG0mrf6QE",this.api_key="AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs",this.companyPageTableData={},this.setCompanyPageTableData()}getProblemData(){return this.fetchProblemData()}fetchProblemData(){let e=this.getUrl("Problem!A:B");var t=new XMLHttpRequest;t.open("GET",e,!1),t.send();let n=JSON.parse(t.responseText).values;return this.parseProblemData(n)}parseProblemData(e){let t={};for(let n=0;n<=e.length-1;n++){let a=e[n][0],r=e[n][1];t[a]=r}return t}getUrl(e){return`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetsId}/values/${e}?key=${this.api_key}`}fetchPageTable(){let e=this.getUrl("CompaniesProblem_Map!A:C");var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),JSON.parse(t.responseText)}setCompanyPageTableData(){let e=this.fetchPageTable().values;for(let t=1;t<=e.length-1;t++){let n=e[t][0],a=e[t][1],r=e[t][2];this.companyPageTableData[n]=[a,r]}}haveData(e){return e in this.companyPageTableData}getCompanyProblemData(e){let t=this.fetchCompanyProblemData(e);return this.parseCompanyProblemData(t)}fetchCompanyProblemData(e){if(!this.haveData(e))return[];let t=`CompaniesProblem!A${this.companyPageTableData[e][0]}:I${this.companyPageTableData[e][1]}`,n=this.getUrl(t);var a=new XMLHttpRequest;return a.open("GET",n,!1),a.send(),JSON.parse(a.responseText).values}parseCompanyProblemData(e){let t=new a;for(let a=0;a<=e.length-1;a++){let r=e[a][2],l=e[a][1],o=e[a][7],i=e[a][6],s=e[a][4],d=e[a][5],h=e[a][0],m=e[a][3],c=new n(r,l,o,i,s,d,h,m);t.appendData(m,c)}return t}};s.injectFunctionOnElementVisible((e=>{let t=e.currentTarget.getAttribute("company-name"),n=d.getCompanyProblemData(t);new o(n,i.getModalContentBox()).test(),i.openModal()})),s.modifyElement();let h=d.getProblemData();new class{constructor(e){this.data=e,this.observer=new MutationObserver((()=>{this.modifyActiveProblemElement(this.data)})),this.modifyActiveProblemElement(this.data),this.addObserverToProblemTable()}modifyActiveProblemElement=()=>{this.disconnectObserverToProblemTable();let e=document.querySelector('[role="rowgroup"]').querySelectorAll('[role="row"]');for(let t=0;t<=e.length-1;t++){let n=e[t].querySelectorAll('[role="cell"]'),a=n[1].textContent,r=n[n.length-1],l=a.split(".")[0],o=this.data[l];null==o&&(o=0),o*=100,this.removeProgressbarUnlockButton(r),this.insertInnerProgressbar(r,o)}this.addObserverToProblemTable()};insertInnerProgressbar(e,t){let n="inner-progressbar",a=e.getElementsByClassName(n),r=e.getElementsByClassName("rounded-l-lg")[0];a.length>0&&a[0].remove(),r.setAttribute("title",`${Math.round(t)}%`);let l=document.createElement("div");l.style=`\n        background-color: red;\n        width: ${t}%;\n        height: 0.5rem;\n        border-bottom-right-radius: 0.5rem;\n        border-top-right-radius: 0.5rem;\n        border-bottom-left-radius: 0.5rem;\n        border-top-left-radius: 0.5rem;\n        `,l.classList.add(n),r.appendChild(l)}disconnectObserverToProblemTable(){this.observer.disconnect()}addObserverToProblemTable(){let e=document.querySelector('[role="table"]');this.observer.observe(e,{childList:!0,subtree:!0})}removeProgressbarUnlockButton(e){let t=e.getElementsByTagName("svg")[0],n=e.getElementsByClassName("rounded-r-lg")[0],a=e.getElementsByClassName("rounded-l-lg")[0];null!=t&&t.remove(),null!=n&&n.remove(),null!=a&&(a.style="\n            border-bottom-right-radius: 0.5rem;\n            overflow: hidden; \n            border-top-right-radius: 0.5rem\n            ")}}(h)})();