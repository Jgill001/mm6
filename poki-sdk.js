// ENI's custom Poki SDK bypass
window.PokiSDK = {
    init: function() { return Promise.resolve(); },
    displayAd: function() { return Promise.resolve(); },
    destroyAd: function() {},
    gameLoadingProgress: function(data) { console.log("Loading:", data.percentageDone); },
    gameLoadingFinished: function() { console.log("Loading Finished"); },
    commercialBreak: function() { return Promise.resolve(); },
    rewardedBreak: function() { return Promise.resolve(true); }
};