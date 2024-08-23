//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~METADATA ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(window).on("load", function()
{
    var meta = $("#mainSVG2 metadata").html();
    console.log(meta);
    var xm = $($.parseXML(meta));

    xm.find("author").text("Gyatsu");

    meta = xm.text();
    console.log(meta);
    $("#mainSVG2 metadata").html(xm.text());
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DRAG AND DROP -- CHANGE PARENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var isDragging = false;
function objectCloneGet(element){
    objectToClone = element;
    isDragging = true;

    objectReplica = objectToClone.cloneNode(true);
    objectReplica.style.fillOpacity = "0.5";
    objectReplica.id = "dragImage";
    objectReplica.class = "dragImage";
    objectReplica.style.position = "absolute";
    document.getElementById('mainSVG1').appendChild(objectReplica);
}

var ghostImage = {'isAppendedToOrigin':false, 'isAppendedToDestination':false};

function objectCloneDragOrigin(ev, element) {
    if (isDragging == true) {
        var dragImage = document.getElementById('dragImage');

        if (ghostImage.isAppendedToOrigin == false) {
            element.appendChild(dragImage);
            ghostImage.isAppendedToOrigin = true;
            ghostImage.isAppendedToDestination = false;
        }

        dragImage.setAttribute('x', ev.offsetX);
        dragImage.setAttribute('y', ev.offsetY);
        console.log(dragImage.getAttribute('x'), dragImage.getAttribute('y'));
    }

}

function objectCloneDragDestination(ev, element) {
    if (isDragging == true) {
        var dragImage = document.getElementById('dragImage');

        if (ghostImage.isAppendedToDestination == false) {
            element.appendChild(dragImage);
            ghostImage.isAppendedToDestination = true;
            ghostImage.isAppendedToOrigin = false;
        }

        dragImage.setAttribute('x', ev.offsetX);
        dragImage.setAttribute('y', ev.offsetY);

    }

}

function objectCloneDrop(ev, dropzone) {
    if (isDragging == true) {
        var objectReplica = objectToClone.cloneNode(true);

        objectReplica.setAttribute('x', ev.offsetX);
        objectReplica.setAttribute('y', ev.offsetY);

        objectReplica.removeAttribute('onmousedown');
        objectReplica.removeAttribute('onmousemove');
        objectReplica.removeAttribute('onmouseup');
        objectReplica.removeAttribute('onmouseleave');
        objectReplica.setAttribute('onmousedown', 'enableMove(this)');
        objectReplica.setAttribute('onmouseup', 'disableMove(this)');
        objectReplica.id = 'appendedObject';

        document.getElementById('mainSVG2').removeChild(document.getElementById('dragImage'));
        dropzone.appendChild(objectReplica);

        isDragging = false;
    }
}


function disableDrag(e) {
    if (isDragging == true) {
        e.removeChild(document.getElementById('dragImage'));
        isDragging = false;
        dragImageIsAppendedToParent = false;
        console.log('Removed from parent');
    }
}


 function indicateDrag(dropzone) {
        if (isDragging == true) {
            dropzone.style.cursor = "pointer";
        }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~REPOSITION SVG ELEMENTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

var targetObject = {
'isMoveable':false, 
'isClickedOnce':false,
'toReAppend':null,
'toRePosition':null
};

function enableMove(ele) {
    targetObject.isMoveable = true;
    targetObject.isClickedOnce = true;
    targetObject.toReAppend = ele;
    targetObject.toRePosition = ele;
}
function reAppend(dropzone) {
    dropzone.appendChild(targetObject.toReAppend);
}

function moveObject(ev, target) {
    if (targetObject.isMoveable == true) {
        if (targetObject.isClickedOnce == true) {
        offx = ev.pageX - targetObject.toRePosition.getAttribute('x');
        offy = ev.pageY - targetObject.toRePosition.getAttribute('y');
        targetObject.isClickedOnce = false;
         }

    objx = (ev.pageX - offx);
    objy = (ev.pageY - offy);
    targetObject.toRePosition.setAttribute('x', objx);
    targetObject.toRePosition.setAttribute('y', objy);

    }
}

function disableMove() {
    targetObject.isMoveable = false;
    targetObject.isClickedOnce = true;
}
