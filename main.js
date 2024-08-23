//---: METADATA 
$(window).on("load", function()
{
    var meta = $("#mainSVG2 metadata").html();
    console.log(meta);
    //$("#mainSVG2 metadata author name").html("Gyatsu")
});
//---: DRAG AND DROP 
//: select
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
      if(os != null && op == false && om == false)
      {
          var obj = os.clone();
          obj.attr("onmousedown","move(this)");
          $('#mainSVG2').append(obj);  
          os = null;
          op = true; 
      }  
    
});
//
var om = false;
var me;
function move(ts)
{
    console.log("MD");
    om = true;
    me = $(ts);
}
//: move 
$("#mainSVG2").mousemove((ev)=>
{ 
    if(op == true || om == true)
    {
       var oq = (om == true) ? me : $('#mainSVG2').children().last();
       var x = ev.pageX - $('#mainSVG2').offset().left;
       var y = ev.pageY - $('#mainSVG2').offset().top;

       var x1 = parseFloat(oq.attr("x"));
       var y1 = parseFloat(oq.attr("y"));
       var x2 = x;
       var y2 = y;
        
       oq.attr("x", x);
       oq.attr("y", y);
    }  
});
//: drop
$("#mainSVG2").mouseup((ev) => { 
    console.log("MF");
    drop(ev);
});
$("#mainSVG2").mouseleave((ev) => { drop(ev); });

function drop(ev)
{
   op = false;
   om = false;
}
//---: 
