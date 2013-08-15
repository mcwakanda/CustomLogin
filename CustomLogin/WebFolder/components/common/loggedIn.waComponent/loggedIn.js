
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'loggedIn';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var logoutButton = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	logoutButton.click = function logoutButton_click (event)// @startlock
	{// @endlock
		WAF.directory.logout();
		window.location = 'index';
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_logoutButton", "click", logoutButton.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
