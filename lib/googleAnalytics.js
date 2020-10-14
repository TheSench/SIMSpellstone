/*
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-84139133-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-84139133-1');
</script>

*/
if (window.location.origin !== "http://localhost" && window.location.origin !== "http://127.0.0.1:8080") {
    (function addGtagScript() {
        var gtagScript = document.createElement('script'),
            firstScript = document.getElementsByTagName(tagName)[0];
        gtagScript.async = 1;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=UA-84139133-1';
        firstScript.parentNode.insertBefore(a, firstScript);
    })();

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
        dataLayer.push(arguments);
    }
    
    // Backwards compatibility
    window.ga = function ga() {
        gtag.call(window, arguments);
    }

    gtag('js', new Date());
  
    gtag('config', 'UA-84139133-1');

    window.addEventListener('error', function (message, url, lineNumber) {
        var errorDescription = "JavaScript error:\n " + message + "\n on line " + lineNumber + "\n for " + url;

        gtag('send', 'exception', {
            'exDescription': errorDescription,
            'exFatal': false
        });
    });
}