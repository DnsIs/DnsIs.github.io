function FindProxyForURL (url, host) {
	var tor = "SOCKS 127.0.0.1:9050";
	if (dnsDomainIs(host, ".onion")) return tor;
	if (shExpMatch(host, "*2ip.ru*")) return tor;
	return "DIRECT";
}
