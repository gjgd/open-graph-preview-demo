const fetch = require('node-fetch');

module.exports.main = async (event) => {
  // const { id } = event.pathParameters;
  const transactionHash = '0x0b49282cebb60981150cad736b4d24f936cf139385f6022806fd5d90db42afdb';
  const elementTransactionData = await fetch(
    `https://element-did.com/api/v1/sidetree/transaction/${transactionHash}/summary`,
    {
      method: 'GET',
    },
  ).then((res) => res.json());
  const title = '';
  const description = '';
  const siteName = `Sidetree Transaction ${elementTransactionData.transaction.transactionNumber}`;
  const redirectUrl = `https://element-did.com/server/transactions/${transactionHash}`;
  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta property="og:title" content="${title}"/>
        <meta property="og:description" content="${description}"/>
        <meta property="og:site_name" content="${siteName}"/>
        <meta property="og:image" content=""/>
      </head>

      <body>
        Redirecting to Element...
      </body>

      <script type="text/javascript">
        window.location.href = "${redirectUrl}";
      </script>
    </html>`;
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: html,
  };
};
