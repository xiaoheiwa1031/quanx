function filter(proxies) {
  return proxies.map(p => p.port === '80');
}
