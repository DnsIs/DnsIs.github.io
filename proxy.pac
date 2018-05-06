function FindProxyForURL (url, host) {
	if (shExpMatch(host, "*nnmclub5toro7u65.onion*")) {
		return "SOCKS 127.0.0.1:9050"
	}
	if (shExpMatch(host, "*2ip.ru*")) {
		return "SOCKS 127.0.0.1:9050"
	}
	return "DIRECT";
}