if (window.location.origin !== "http://localhost" && window.location.origin !== "http://127.0.0.1:8080") {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date(); a = s.createElement(o),
            m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-84139133-1', 'auto');
    ga('send', 'pageview');

    window.addEventListener('error', function (message, url, lineNumber) {
        var errorDescription = "JavaScript error:\n " + message + "\n on line " + lineNumber + "\n for " + url;

        ga('send', 'exception', {
            'exDescription': errorDescription,
            'exFatal': false
        });
    });
}