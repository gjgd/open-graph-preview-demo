module.exports.main = async (event) => {
  const userAgent = event.headers['User-Agent'];
  let html;
  if (userAgent.includes('Slackbot-LinkExpanding')) {
    const title = 'Title';
    const description = 'description';
    const siteName = 'Site name';
    html = `
<html>
  <head>
    <meta charset="UTF-8">
    <meta property="og:title" content="${title}"/>
    <meta property="og:description" content="${description}"/>
    <meta property="og:site_name" content="${siteName}"/>
  </head>
</html>
`;
  } else {
    html = `
<html>
  <body>
    Hello world ${event.pathParameters.id}
  </body>
</html>
`;
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
};
