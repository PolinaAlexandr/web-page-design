function change_locale() {
	var current_body_locale = document.body.className;
	
	if (current_body_locale === "en") {
		document.body.className = "ru";
	} else {
		document.body.className = "en";
	}
	
    var current_head_locale = document.head.className;
    
    if (current_head_locale === "en") {
		document.head.className = "ru";
	} else {
		document.head.className = "en";
    }

}