/*
Document   : biocompendium_popup.js
Created on : September 1st, 2009
Author     : venkata.satagopam@embl.de
*/

function list_option_text (background, session, gene_list, org) {
    var width = "200px";
    var height = "243px";
    var returnString = "";
//    var url_cgi = "https://biocompendium.embl.de/cgi-bin/biocompendium.cgi";	
//    var url_viz_cgi = "https://biocompendium.embl.de/cgi-bin/biocompendium_visualization.cgi";	

//    var url = document.location.href;
    var url = window.location.href;
    var reg = new RegExp("https");
    if (reg.test(url)) {
	var url_cgi = "https://biocompendium.embl.de/cgi-bin/biocompendium.cgi";
	var url_viz_cgi = "https://biocompendium.embl.de/cgi-bin/biocompendium_visualization.cgi";
	var url_download_cgi = "https://biocompendium.embl.de/cgi-bin/download.cgi";
    }
    else {
 	var url_cgi = "http://biocompendium.embl.de/cgi-bin/biocompendium.cgi";
	var url_viz_cgi = "http://biocompendium.embl.de/cgi-bin/biocompendium_visualization.cgi";
	var url_download_cgi = "http://biocompendium.embl.de/cgi-bin/download.cgi";
    }
//    alert("isSecure : "+url);	
//    alert("url_cgi : "+url_cgi);	
//    alert("url_viz_cgi : "+url_viz_cgi);	
    returnString  = '<ul>';
    returnString += '<li><a href="' + url_cgi + '?section=biodb&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org + '&sort=name&ad=asc" target="_blanck" style="text-decoration:none">Summary sheets</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=homology_clustering&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Homology clustering</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=orthology&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Orthology information</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=domains&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Clustering by domain architecture</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=pathway&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Pathway information</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=chemistry&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Chemistry information</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=go&pos=0&background=' +background+ '&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Gene ontology</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=transcription_factor&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Transcription factor binding site profiling</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=patent&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Patent information</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=clinical_trials&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">Clinical trials information</a></li>';
    returnString += '<li><a href="' + url_cgi + '?section=interaction&pos=0&session=' + session + '&list=' + gene_list + '&org=' + org +'" target="_blanck" style="text-decoration:none">P-P, P-C interactions</a></li>';
//    returnString += '<li><a href="' + url_cgi + '?section=medusa&session=' + session + '&list=' + gene_list + '&org=' + org + '" target="_blanck" style="text-decoration:none">Visualization in Medusa</a></li>';
//    returnString += '<li><a href="' + url_cgi + '?section=arena3d&session=' + session + '&list=' + gene_list + '&org=' + org + '" target="_blanck" style="text-decoration:none">Arena3D visualization</a></li>';
    returnString += '<li><a href="' + url_viz_cgi + '?section=visualization&session=' + session + '&list=' + gene_list + '&org=' + org + '" target="_blanck" style="text-decoration:none">Visualization</a></li>';
    returnString += '<li><a href="' + url_download_cgi + '?file=sessions/' + session + '/' + gene_list + '.txt' + '" style="text-decoration:none">Download gene list</a></li>';
    returnString += '</ul>';
    returnString += '<div id="overLayDiv" style="width: ' + width + ';height: ' + height + '; position: absolute; z-index: 100; top: 20px; left: 2px; background-color: #EEEEEE; display: none;">';
    returnString += '<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Moving the PopUp...<br>&nbsp;&nbsp;&nbsp;&nbsp;Information will reappear if you release the mouse button.';
    returnString += '</div>';
    return returnString;
}



function alignment (alignment) {
    var width = "400px";
    var height = "443px";
    var returnString = "";

    var align = alignment.replace(/____/g,"\n");
    returnString = '<pre>' + align + '</pre>';	
    returnString += '<div id="overLayDiv" style="width: ' + width + ';height: ' + height + '; position: absolute; z-index: 100; top: 20px; left: 2px; background-color: #EEEEEE; display: none;">';
    returnString += '<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Moving the PopUp...<br>&nbsp;&nbsp;&nbsp;&nbsp;Information will reappear if you release the mouse button.';
    returnString += '</div>';
    return returnString;
}

function removeDiv(event){
  if(document.getElementById("overLayDiv")){
    document.getElementById("overLayDiv").style.display = "none";
  }
}

function addEventHandlerToElement(elementToAttachListener, typeOfEvent, eventFunction, preventBubbling)
{
        if(elementToAttachListener.addEventListener) 
        { 
                //you are using a w3c DOM compliant browser
                elementToAttachListener.addEventListener(typeOfEvent, eventFunction , preventBubbling); //capture event ie prevent bubbling: T/F
        }
        else if(elementToAttachListener.attachEvent) 
        {
                //you are using IE      
                elementToAttachListener.attachEvent("on"+typeOfEvent, eventFunction );
        }      
}

var openingClickOccured = false; 

function closePopup(event)
{
	if (over) //over: popup object in overlib  
	{//true if a a popup is open
//	  console.log("PopUp open");
//	  console.log(cursorOff());
		if (cursorOff(event))
		{//true if the mouse is outside the popup upon "onClick"
			if (openingClickOccured)
			{
//			  console.log("Opening click occured");
				nd();// overlib method to close the popup
				openingClickOccured = false;
			}else{
//			  console.log("Opening click NOT occured");
				openingClickOccured = true;
			}
		}else{
//		    console.log("Cursor NOT offside");
			openingClickOccured = true;
		}
	}else{
		//openingClickOccured = false;
	}
}
addEventHandlerToElement(document,"mouseup", function(e) { removeDiv(e);  } , false);
addEventHandlerToElement(document,"mouseup", function(e) { closePopup(e);  } , false);
