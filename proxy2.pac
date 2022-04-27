function FindProxyForURL(url, host) {
	host = host.toLowerCase();
	var tor = "SOCKS 127.0.0.1:9050";
    var proxylist = [
	    	"*2ip.ru",
	    	"*ident.me",
		"*rutracker.org",
		"*nnmclub.to",
		"*instagram*",
	    	"*twitter*",
		"*torproject.org",
		"*tor.eff.org",
		"*thepiratebay.cr",
		"*booktracker.org",
		"*kinogo-lordfilm.net",
		"*filmix.ac",
		"*kinozal.tv",
		"*seasonvar.ru",
		"*big-library.info",
		"*pornolab.net",
		"*xhamster*"
	];

    if (dnsDomainIs(host, ".onion")) return tor;

    for (var i = 0; i < proxylist.length; i++) {				
		if ( shExpMatch( host, proxylist[i] ) ) {
            return tor;
        }
    }

    return "DIRECT";
}
