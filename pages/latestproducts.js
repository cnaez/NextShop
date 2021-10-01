import { server } from '../config'
import Meta from '../components/Meta'
import ArticleList from '../components/ArticleList'

const latestproducts = () => {
  return (
    <div>
      <Meta title='Latest Products' />
      <h1>Latest Products</h1>
      <div>
        <ArticleList articles={articles} />
      </div>
    </div>
  )
}
export default latestproducts


export const getServerSideProps = async () => {
  const res = await fetch(`${server}/Products/GetLasProduct`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}

