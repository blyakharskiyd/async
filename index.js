const urls = ['./common.js', './fetch.js', './promise.js'];

urls.forEach(url => {
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
});
