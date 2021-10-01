import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/bookfavicon.png' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Next Shop',
  keywords: 'Book store, reading',
  description: 'Get the latest books in NextShop',
}

export default Meta
