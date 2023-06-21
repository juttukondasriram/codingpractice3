import './index.css'

const BannerCardItem = props => {
  const {list} = props
  const {id, headerText, description, className} = list
  return (
    <li key={id} className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button>Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
