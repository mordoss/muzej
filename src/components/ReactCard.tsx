import { useState, type FC } from 'react'
import '../styles/ReactCard.css'
import '../styles/Dropdown.css'

interface IProps {
  heading: string
  options: string[]
}

const Card: FC<IProps> = ({ heading, options }) => {
  const [showMore, setShowMore] = useState(false)
  const firstOptions = options.slice(0, 2)
  const restOptions = options.slice(2)

  return (
    <div className="react-card shadow">
      <h4 className="card-heading">{heading}</h4>
      <ul>
        {firstOptions.map((option, i) => (
          <li key={option}>
            • {option}
            {i === 1 && !showMore && '...'}
          </li>
        ))}
      </ul>

      <ul className={`rest-options ${showMore ? 'show' : ''} disc`}>
        {restOptions.map((option) => (
          <li key={option}>• {option}</li>
        ))}
      </ul>
      <button onClick={() => setShowMore(!showMore)}>
        <div className={`arrow ${showMore && 'rotate'} white`} />
        {!showMore ? 'Više' : 'Manje'} detalja
      </button>
    </div>
  )
}

export default Card
