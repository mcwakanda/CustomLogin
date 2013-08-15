
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var loginButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	loginButton.click = function loginButton_click (event)// @startlock
	{// @endlock
		CRM.login($$('usernameInput').getValue(), $$('passwordInput').getValue(), function(result){
			if(result){
				window.location = 'app';
			} else {
				$$('usernameInput').setValue("");
				$$('passwordInput').setValue("");
			}
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		if(WAF.directory.currentUser() != null){
			window.location = 'app';
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("loginButton", "click", loginButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
