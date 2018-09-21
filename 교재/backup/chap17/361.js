const html =
  `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
  `<A href='/foo' Class="foo">Foo</a>\n` +
  `<a href="/foo">Foo</a>\n` +
  `<a onclick="javascript:alert('foo!')" href="/foo">Foo</a>`;

html.replace(/<a .*?>(.*?)<\/a>/ig, function(m, g1, offset) {
  console.log(m);
  console.log(`\t<a> tag found at ${offset}. contents: ${g1}`);
});

// <a> tag found at 0. contents: Foo
// <a> tag found at 44. contents: Foo
// <a> tag found at 79. contents: Foo
// <a> tag found at 102. contents: Foo