const fetch = require('node-fetch');

module.exports.main = async (event) => {
  const { id } = event.pathParameters;
  const transactionHash = id;
  const elementTransactionData = await fetch(
    `https://element-did.com/api/v1/sidetree/transaction/${transactionHash}/summary`,
    {
      method: 'GET',
    },
  ).then((res) => res.json());
  const title = `Element Transaction ${elementTransactionData.transaction.transactionNumber}`;
  const description = `DID Unique suffixes: ${elementTransactionData.anchorFile.didUniqueSuffixes}`;
  const siteName = `${transactionHash}`;
  const redirectUrl = `https://element-did.com/server/transactions/${transactionHash}`;
  const html = `
<html>
  <head>
    <meta charset="UTF-8">
    <meta property="og:title" content="${title}"/>
    <meta property="og:description" content="${description}"/>
    <meta property="og:site_name" content="${siteName}"/>
  </head>

  <body>
    Redirecting to Element...
  </body>

  <script type="text/javascript">
    window.location.href = "${redirectUrl}";
  </script>
</html>
`;
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
};
