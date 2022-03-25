var yazi="Roses32 "; 
var hiz=500; 
function scroll_title() { 
    document.title=yazi; 
    yazi=yazi.substring(1,yazi.length)+yazi.charAt(0); 
    setTimeout("scroll_title()",hiz); 
} 
scroll_title(); 