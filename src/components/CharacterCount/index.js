import './index.css'

const CharacterCount = props => {
  const {eachItem} = props
  const {word} = eachItem
  return (
    <li className="list-item">
      <p>
        {`${word} : `}
        <span className="length">{word.length}</span>
      </p>
    </li>
  )
}

export default CharacterCount
