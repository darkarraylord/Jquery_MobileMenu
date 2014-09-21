//Problem: It looks gross in smaller widths and small devices
//Solution:  Hide text links and swap them to a more appropriate navigation

//Plan Prepare Perform Perfect:
//Create a Select and append to menu
//Cycle over each LI to create Select->Options
	//Create options
	//options values is the href od the links
	//options text is the text of the link
	//append options to <select>
//Create a button to go to selects location
	//Bind click to button
	//Go to the selected location
//Modify CSS to hide links on small res and show button and select
	//Also hides and button on larger widths
//Deal with selected options pending current page

//Prepare:

//Create Select
var $select = $("<select></select>");
//select Menu Container
var $menuContainer = $("#menu");
//APPEND SELECT TO MANU CONTAINER
$menuContainer.append($select);

//Cycle over each <li> to create <options>
	var $listItems = $("#menu a");
	
	//Create Option List //Using unction EACH from JQuery
	// $listItems.each(function(){
	// 	var $option = $('<option></option>');
	// 	var $anchor = $(this);
	// 	//options values is the href od the links
	// 	$option.val($anchor.attr("href"));
	// 	//options text is the text of the link
	// 	$option.text($anchor.text());
	// 	$select.append($option);
	// });

	for(var i=0; i<$listItems.length;i++){
		var $option = $('<option></option>');
		var $anchor = $($listItems[i]);
		//options values is the href od the links
		$option.val($anchor.attr("href"));
		//options text is the text of the link
		$option.text($anchor.text());
		//Preselect option of current page
		if($anchor.parent().hasClass("selected")){
			$option.attr("selected","selected");
		}
		
		
		$select.append($option);
	}
	// //Create a button to go to selects location
	// $goButton = $('<button></button>');
	// $goButton.attr("type", "button");
	// $goButton.text("Go!");
	// $menuContainer.append($goButton);
	//Bind click to button
	//Go to the selected location
	$select.change(function(){
		window.location = $select.val();
	});
	