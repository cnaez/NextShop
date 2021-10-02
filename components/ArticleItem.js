import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {

  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <img width={250} height={250} src={`${process.env.NEXT_PUBLIC_URL}/Media/Product/${article.featureImage}`} alt="Picture of the book"  />
        <h3>{article.title}</h3>
        <p className={articleStyles.maxLines}>{article.shortDescription}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
