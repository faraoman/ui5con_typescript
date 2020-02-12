sap.ui.define([
	"sap/ui/test/Opa5",
	"de/tammenit/UHDApp/test/integration/arrangements/Startup",
	"de/tammenit/UHDApp/test/integration/BasicJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1
	});

});
