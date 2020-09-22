// Open Network Preferences -> Advanced -> Proxies
// [x] Automatic Proxy Configuration
// Set Proxy Configuration File URL:
// http://localhost:10080/proxy.pac

var domains = {
  "192.168.0.193": 1,
  "10.200.0.4": 1,
  "storage.numatech.ru": 1,
  "office.numatech.ru": 1,
  "gitlab.numatech.ru": 1,
  "docs": 1,
  "gitlab": 1
};

var proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080; DIRECT;";

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}
