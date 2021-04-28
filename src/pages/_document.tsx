import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* <link rel="preconnect" .../> */}
					{/* <link href="https://fonts.google..." ... /> */}
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}