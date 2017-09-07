function rc4 (text, key) {
    var i, x, y, t, x2;
    s = [];
    for (i = 0; i < 256; i++) {
        s[i] = i
    }
    j = 0
    for (i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length) ) % 256
        t = s[i];
        s[i] = s[j];
        s[j] = t;
    }
	i = 0;
	j = 0;
	z = "";
	for (x = 0; x < text.length; x++) {
		i = (i + 1) % 256
		j = (j + s[i]) % 256
		t = s[i]; s[i] = s[j]; s[j] = t;
		k = s[( s[i] + s[j] ) % 256]
		z += String.fromCharCode(text.charCodeAt(x) ^ k)
	}
    return z
}
