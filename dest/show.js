function closeYoudao(){var e=document.getElementById("youdao");e&&document.body.removeChild(e);var t=document.getElementById("youdao-btn");t&&(t.style.display="none")}function initPanel(){var e=document.createElement("div");e.setAttribute("id","youdao"),e.style.width="400px",e.style.backgroundColor="#EEF3F0",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.maxHeight="100%",e.style.zIndex="10000",e.style.textAlign="left",e.style.padding="20px",e.style.overflow="auto";var t=document.createElement("p");return t.innerHTML="查询中，请稍候...",t.setAttribute("id","youdao-loading"),e.appendChild(t),document.body.appendChild(e),e}function loadYoudao(){closeYoudao();var e=initPanel(),t=document.getElementById("youdao-content");t&&e.removeChild(t);var o=new XMLHttpRequest;o.open("GET","https://dict.youdao.com/search?q="+gb.searchTxt,!0),o.send(),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){var t=document.getElementById("youdao-loading");t&&e.removeChild(t),alert(o.responseText.getElementById("results"))}}}var gb={searchTxt:null,enableSwitch:!0};document.onmouseup=function(e){return e.target===document.getElementById("youdao-btn")?void loadYoudao():void chrome.storage.sync.get("enableSwitch",function(e){if(e.enableSwitch){var t=window.getSelection(),o=t.getRangeAt(0).getBoundingClientRect(),n=document.getElementById("youdao-btn");n?n.style.display="block":(n=document.createElement("img"),n.setAttribute("id","youdao-btn"),n.setAttribute("src","https://raw.githubusercontent.com/Ovilia/handian-chrome-extension/master/res/handian32.png"),n.style.position="absolute",n.style.cursor="pointer",n.style.zIndex="1000",document.body.appendChild(n)),n.style.top=o.bottom+window.pageYOffset+10+"px",n.style.left=o.left+window.pageXOffset+"px";var d=t.toString();d?gb.searchTxt=encodeURIComponent(d):closeYoudao()}else closeYoudao()})};