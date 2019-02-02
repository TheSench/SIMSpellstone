window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments);}; ga.l=+new Date;

if(window.location.origin !== "http://localhost" && window.location.origin !== "http://127.0.0.1:8080") {
    window.sa = function() {
        ga.call(arguments);
    };
} else {
    window.sa = function(){};
}

window.sa('create', 'UA-84139133-1', 'auto');
window.sa('send', 'pageview');