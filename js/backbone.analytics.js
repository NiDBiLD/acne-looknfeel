/* 
CHANGED SLIGHTLY TO MATCH NEW GOOGLE SYNTAX: 
https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
*/
(function() {
  var loadUrl = Backbone.History.prototype.loadUrl;
  
  Backbone.History.prototype.loadUrl = function(fragmentOverride) {
    var matched = loadUrl.apply(this, arguments),
        gaFragment = this.fragment;
    if (!/^\//.test(gaFragment)) gaFragment = '/' + gaFragment;
    if(window.ga !== undefined) window.ga('send','pageview',gaFragment);
    
    return matched;
  };

}).call(this);
