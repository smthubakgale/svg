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
var op = false;
var oq ;
$("#mainSVG2").mouseenter(()=>
{ 
      if(os != null)
      {
          var obj = os.clone();
          $('#mainSVG2').append(obj); 
          
          os = null;
          op = true;
          //oq = obj;
      }  
    
});

$("#mainSVG2").mousemove((ev)=>
{ 
      if(op == true && false)
      {
          var x = ev.pageX;
          var y = ev.pageY;

          console.log(x , y);
          oq.attr("x", x);
          oq.attr("y", y);
      }  
    
});

$("#mainSVG2").mouseup(()=>
{ 
      op = false; 
});
$("#mainSVG2").mouseleave(()=>
{ 
      op = false; 
});
