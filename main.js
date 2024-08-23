//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~METADATA ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(window).on("load", function()
{
    var meta = $("#mainSVG2 metadata").html();
    console.log(meta);
    //$("#mainSVG2 metadata author name").html("Gyatsu")
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DRAG AND DROP -- CHANGE PARENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var os = null;
function objectCloneGet(ts)
{ 
    isDragging = true;
    os = $(ts).clone();
    os.attr("onclick",null); 
    
}
var op = null;
$("#mainSVG2").mouseenter(()=>
{ 
      if(os != null)
      {
          var obj = os.clone();
          os = null;
          op = obj;
          $('#mainSVG2 g').append(obj);
      }  
    
});

$("#mainSVG2").mousemove(()=>
{ 
      if(op != null)
      {
          
      }  
    
});

$("#mainSVG2").mouseup(()=>
{ 
      op = null; 
});
