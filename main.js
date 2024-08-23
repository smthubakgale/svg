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

$("#mainSVG2").mousemove((ev)=>
{ 
      if(op != null)
      {
          var x = ev.pageX;
          var y = ev.pageY;

          op.attr("x", x);
          op.attr("y", y);
      }  
    
});

$("#mainSVG2").mouseup(()=>
{ 
      op = null; 
});
$("#mainSVG2").mouseleave(()=>
{ 
      op = null; 
});
