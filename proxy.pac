function FindProxyForURL (url, host) {
	var tor = "SOCKS5 localhost:9150";
    if (dnsDomainIs(host, ".onion"))
        return tor;
	if (shExpMatch(host, "*2ip.ru*")) {
		return tor;
	}
	return "DIRECT";
}
