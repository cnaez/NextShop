import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.data.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList
