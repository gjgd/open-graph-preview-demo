module.exports.main = async (event) => {
  const { id } = event.pathParameters;
  const html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta property="og:title" content="Sidetree Transaction ${id}"/>
        <meta property="og:description" content="Ethereum Block: 8392546"/>
        <meta property="og:site_name" content="Element"/>
        <meta property="og:image" content="https://raw.githubusercontent.com/transmute-industries/trade.transmute.world/master/packages/trade-app/public/logo512.png?token=AB4MAXP3QXWPS2XPHUOLOQK7GGNRU"/>
      </head>

      <body>
        Redirecting to Element...
      </body>

      <script type="text/javascript">
        window.location.href = "https://element-did.com/server/transactions/0x8ac0dade78b89ec1f83f129c90fda3d0db2bd7dcc39cdac8979bd05002448eb9";
      </script>
    </html>`;
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
    body: html,
  };
};
