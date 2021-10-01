import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>NextShop</span> book
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with books
      </p>
    </div>
  )
}

export default Header
