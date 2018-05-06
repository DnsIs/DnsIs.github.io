function FindProxyForURL (url, host) {
	var proxylist = ["2ip.ru", "rutracker.org", "nnmclub.to", "nnm-club.me"]
	var tor = "SOCKS 127.0.0.1:9050";
	if (dnsDomainIs(host, ".onion")) return tor;
	for (var i=0; i<proxylist.length; i++) {
		var value = proxylist[i];
		if ( localHostOrDomainIs(host, value) ) {
			return tor;
		}
	}
	return "DIRECT";
}
