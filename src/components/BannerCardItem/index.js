import './index.css'

const Banner = props => {
  const {bannerCardsData} = props
  const {headerText, description, className} = bannerCardsData

  return (
    <li className="container">
      <div className={className}>
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default Banner
