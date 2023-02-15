import './index.css'

const SuggestionItem = props => {
  const {listItem, sentenseChange} = props
  const {suggestion} = listItem

  const onChangeItem = () => {
    sentenseChange(suggestion)
  }

  return (
    <li className="listitem">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onChangeItem}
      />
    </li>
  )
}

export default SuggestionItem
