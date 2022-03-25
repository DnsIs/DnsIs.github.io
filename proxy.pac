function FindProxyForURL(url, host) {
	var tor = "SOCKS 127.0.0.1:9050";
	host = host.toLowerCase();

    var proxylist = [
		"rutracker.org",
		"nnmclub.to",
		"kinozal.tv",
		"lostfilm.tv",
		"thepiratebay.cr",
		"thepiratebay.by",
		"pornolab.net",
		"filecat.net",
		"booktracker.org",
		"big-library.info",
		"tparser.org",
		"torproject.org",
		"tor.eff.org",
		"instagram.com",
		"cdninstagram.com",
		"xhamster.com",
		"xhamster.desi",
		"xhamster.xxx",
		"xhamster4.com"
	];

    if (dnsDomainIs(host, ".onion")) return tor;

    for (var i = 0; i < proxylist.length; i++) {				
        var value = proxylist[i];
        //if (localHostOrDomainIs(host, value)) {
        if (dnsDomainIs(host, value)) {
            return tor;
        }
    }

    return "DIRECT";
}
