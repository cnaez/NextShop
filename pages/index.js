import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/Products/GetAll/?categoryId=14`)
  const articles = await res.json()

  return {
    props: {
      articles,
    },
  }
}
