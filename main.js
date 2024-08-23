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
$("#mainSVG2").mouseenter(()=>
{ 
      if(os != null)
      {
          var obj = os.clone();
          $('#mainSVG2').append(obj);  
          os = null;
          op = true; 
      }  
    
});

var om = false;
var me;
$("#mainSVG2").mousemove((ev)=>
{ 
      if(op == true || om == true)
      {
          var oq = (om == true) ? me : $('#mainSVG2').children().last();
          var x = ev.pageX - $('#mainSVG2').offset().left;
          var y = ev.pageY - $('#mainSVG2').offset().top;

          console.log(x , y);
          oq.attr("x", x);
          oq.attr("y", y);
      }  
     
});

$("#mainSVG2").mouseup((ev)=>
{ 
      drop(ev);
});
$("#mainSVG2").mouseleave((ev)=>
{ 
      drop(ev);
});

function drop(ev)
{
    if(op == true)
    {
        var oq = $('#mainSVG2').children().last();
        oq.on("click", function()
        {
            om = true;
            me = oq;
        });
        op = false;
    }
    if(om == true){
        om = false;
    }
}
