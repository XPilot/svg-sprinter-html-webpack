const SvgSpriteHtmlPlugin = require('../src/plugin');

const SPRITE_SVG = '<svg>svg mock</svg>';

test('Should insert svg', () => {
  const BASIC_HTML = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
  </html>
  `;
  const EXPECTED_RESULT = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body><svg>svg mock</svg>
      <div id="app"></div>
    </body>
  </html>
  `;

  const pluginInstance = new SvgSpriteHtmlPlugin();
  pluginInstance.svgSprite = SPRITE_SVG;
  const htmlWithSvg = pluginInstance.insertSpriteInHtml(BASIC_HTML);

  expect(htmlWithSvg).toBe(EXPECTED_RESULT);
});

test('Should insert svg when body contain attributes', () => {
  const HTML_WITH_CUSTOM_BODY = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body style="position: absolute">
      <div id="app"></div>
    </body>
  </html>
  `;
  const EXPECTED_RESULT = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body style="position: absolute"><svg>svg mock</svg>
      <div id="app"></div>
    </body>
  </html>
  `;

  const pluginInstance = new SvgSpriteHtmlPlugin();
  pluginInstance.svgSprite = SPRITE_SVG;
  const htmlWithSvg = pluginInstance.insertSpriteInHtml(HTML_WITH_CUSTOM_BODY);

  expect(htmlWithSvg).toBe(EXPECTED_RESULT);
});

test('Should return exactly the same html if there is no body tag', () => {
  const HTML_WITHOUT_BODY = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
  </html>
  `;

  const pluginInstance = new SvgSpriteHtmlPlugin();
  pluginInstance.svgSprite = SPRITE_SVG;
  const htmlWithSvg = pluginInstance.insertSpriteInHtml(HTML_WITHOUT_BODY);

  expect(htmlWithSvg).toBe(HTML_WITHOUT_BODY);
});
