var c1 = document.querySelectorAll("circle")[0],
c2 = document.querySelectorAll("circle")[1],
c3 = document.querySelectorAll("circle")[2],
path = document.querySelectorAll("path")[0],
drag, d = {x1:60,y1:80,x2:95,y2:10,x3:180,y3:80};    

window.addEventListener("mousedown",mdHandler);
function mdHandler(e){
  if(e.srcElement instanceof SVGCircleElement){
    drag = e.srcElement;
    drag.x = e.srcElement.getAttribute("cx");
    drag.y = e.srcElement.getAttribute("cy");
    drag.clientX = e.clientX;
    drag.clientY = e.clientY;
    
    window.addEventListener("mousemove",mmHandler);
    window.addEventListener("mouseup",muHandler);
  }
}

function mmHandler(e){
  drag.setAttribute("cx",e.clientX - (drag.clientX - drag.x));
  drag.setAttribute("cy",e.clientY - (drag.clientY - drag.y));
  switch( drag ){
    case c1:
      d.x1 = drag.getAttribute("cx");
      d.y1 = drag.getAttribute("cy"); break;    
    case c2:
      d.x2 = drag.getAttribute("cx");
      d.y2 = drag.getAttribute("cy"); break;
    case c3:
      d.x3 = drag.getAttribute("cx");
      d.y3 = drag.getAttribute("cy"); break;      
  }
  path.setAttribute("d",`M${d.x1} ${d.y1} Q ${d.x2} ${d.y2} ${d.x3} ${d.y3}`);
  document.getElementById("path").innerHTML = path.getAttribute("d");
}
function muHandler(e){
  window.removeEventListener("mousemove",mmHandler);
  window.removeEventListener("mouseup",muHandler);
}