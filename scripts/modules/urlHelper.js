define('urlHelper', [], function () {
    "use strict";

    var api = {
        paramDefined: paramDefined,
        paramValue: paramValue,
        getCurrentPage: getCurrentPage
    };

    // GET variables
    function paramValue(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1] ? pair[1] : '');
            }
        }
        return undefined;
    }

    function paramDefined(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return true;
            }
        }
        return false;
    }

    function getCurrentPage() {
        var currentPage = window.location.href;
        var pageEnd = currentPage.indexOf(".html");
        currentPage = currentPage.substring(0, pageEnd);
        var pageStart = currentPage.lastIndexOf("/") + 1;
        currentPage = currentPage.substring(pageStart).toLowerCase();
        return currentPage;
    }

    return api;
});