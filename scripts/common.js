// JavaScript Document

$(document).bind( "mobileinit", function(event) {
    $.extend($.mobile.zoom, {locked:true,enabled:false});
});

function resetCheckButtons() {
	// Counter für Anzahl gedrückter Buttons initialisieren	
	buttonPushedCounter = 0;
	// Array der gedrückten Buttons initialisieren
	pushedButtonsArray = new Array();
	pushedButtonsArray[0] = 0;
	$(".lgkButton").each(function() {
		$(this).removeClass("lgkButtonPressed");
		$(this).addClass("lgkButtonInitial");
	});
	
	$("#resultButton").removeClass("resultButtonGreen");
	$("#resultButton").removeClass("resultButtonYellow");
	$("#resultButton").removeClass("resultButtonRed");
	$("#resultButton").removeClass("resultButtonActive");
	$("#popupContent").removeClass("resultPopupGreen");
	$("#popupContent").removeClass("resultPopupYellow");
	$("#popupContent").removeClass("resultPopupRed");
	$("#popupLGK").text("");
	$("#resultLabelSpan").text("Wählen Sie Lagerklassen zur Prüfung.");
	$("#resultAnchor").bind('click', false);
}


$(document).ready(function() {	
	
	var homeScreenCheck = localStorage.getItem("homeScreenCheck");
	localStorage.setItem("homeScreenCheck", "1");
	$("#resultAnchor").bind('click', false);
	
	// alert(homeScreenCheck);
		

	// Counter für Anzahl gedrückter Buttons initialisieren	
	buttonPushedCounter = 0;
	// Array der gedrückten Buttons initialisieren
	pushedButtonsArray = new Array();
	pushedButtonsArray[0] = 0;

	// LGK-ZAHLEN-BUTTON WIRD GEDRÜCKT
	$(".lgkButton").click(function() {
		
		// Prüfsumme initialisieren
		pruefSumme = 0;
		// ID des aktuell gedrückten Zahlen-Buttons
		var buttonID = this.id;
		// Element des aktuell gedrückten Zahlen-Buttons
		var buttonElement = document.getElementById(this.id);		
		
		// Resultat-Button initialisieren
		$("#resultButton").removeClass("resultButtonGreen");
		$("#resultButton").removeClass("resultButtonYellow");
		$("#resultButton").removeClass("resultButtonRed");
		$("#resultButton").removeClass("resultButtonActive");
		$("#popupContent").removeClass("resultPopupGreen");
		$("#popupContent").removeClass("resultPopupYellow");
		$("#popupContent").removeClass("resultPopupRed");
		
		// Resultat-Text initialisieren
		$("#resultLabelSpan").text("Wählen Sie  Lagerklassen zur Prüfung.");
		$("#popupLGK").text("");
		$("#resultAnchor").bind('click', false);
		
		// Wenn Zahlen-Button bereits gedrückt, dann...
		if ($(buttonElement).hasClass("lgkButtonPressed")) {
			// CSS Klassen manipulieren
			$(buttonElement).removeClass("lgkButtonPressed");
			$(buttonElement).removeClass("lgkButtonHover");
			$(buttonElement).addClass("lgkButtonInitial");
			// 
			buttonPushedCounter = buttonPushedCounter - 1;
			// Zu entfernenden Button im Array suchen
			var positionOfButtonInArray = pushedButtonsArray.indexOf(buttonID);
			// und den Button aus dem Array entfernen
			pushedButtonsArray.splice(positionOfButtonInArray,1);
		}
		// ansonsten, wenn Zahlen-Button noch nicht gedrückt, dann...
		else {
			// CSS Klassen manipulieren
			$(buttonElement).removeClass("lgkButtonInitial");			
			$(buttonElement).addClass("lgkButtonHover");
			$(buttonElement).addClass("lgkButtonPressed");
			// 
			buttonPushedCounter = buttonPushedCounter + 1;
			pushedButtonsArray[buttonPushedCounter] = buttonID;
		}
		
		// Länge des Button-Arrays ermitteln
		var pushedButtonsArrayLength = pushedButtonsArray.length - 1;
		
		// Prüfung durchführen, wenn Array-Länge >= 2
		if (pushedButtonsArrayLength >= 2) {
			
			// 1. Iteration durch das Buttons-Array, um die zu prüfende Klasse zu ermitteln
			for (var i = 1; i < pushedButtonsArray.length; i++) {
								
				$("#popupLGK").append("<tr><td valign=top nowrap><strong>" + lgkCompatibility[pushedButtonsArray[i]] [26] + "</strong></td><td>" + lgkCompatibility[pushedButtonsArray[i]] [27] + "</td></tr>");

				// 2. Iteration durch das Buttons-Array, um die anderen Klassen zu ermitteln
				for (var n = 1; n < pushedButtonsArray.length; n++) {
					
					if (n > i) {
						
						pruefSumme = pruefSumme + lgkCompatibility[pushedButtonsArray[i]] [pushedButtonsArray[n]];
						// alert(lgkCompatibility[i] [n]);
						
						}
					
					}



				};
			
			// alert(pruefSumme);
			
			$("#resultAnchor").unbind('click', false);

			
			if (pruefSumme >= 10) {
				colorClass = "Red";
				checkResultText = "VERBOTEN";
				popupResultConclusion = "Separatlagerung<br>ist erforderlich";
				}
			else if (pruefSumme >= 1) {
				colorClass = "Yellow";
				checkResultText = "EINGESCHRÄNKT ERLAUBT";
				popupResultConclusion = "Zusammenlagerung<br>nur eingeschränkt erlaubt";
			}
			else {
				colorClass = "Green";
				checkResultText = "ERLAUBT";
				popupResultConclusion = "Zusammenlagerung<br>grundsätzlich erlaubt";
			}

			
			$("#resultButton").addClass("resultButtonActive");
			$("#resultButton").addClass("resultButton" + colorClass);
			$("#popupContent").addClass("resultPopup" + colorClass);
			$("#resultLabelSpan").html(checkResultText + "<h6>Tippen für mehr Info.</h6>");
			$("#popupResultConclusion").html(popupResultConclusion);
		};

		
		// $("#resultLabelSpan").text("Button-ID: " + buttonID + " Button-Value: " + lgkCompatibility[buttonID] [buttonID] + "Anzahl Buttons: " + buttonPushedCounter + "Button-Array: " + pushedButtonsArray[buttonPushedCounter] + "Array-Länge: " + pushedButtonsArrayLength);
		
		

		
		});
		
		

	
// Scrollt URL-Bar weg //
window.scroll(0,1);

	
function blockMove() {
	event.preventDefault();
	}


});
