Given("the TAFE homepage is loaded", function (){
  // Check to see if the TAFE Beta HomePage loaded.
  aqObject.CheckProperty(Aliases.browser.tafeHomePage, "Visible", cmpEqual, true);
});