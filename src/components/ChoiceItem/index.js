import './index.css'

const ChoiceItem = props => {
  const {choice, onOptingChoice} = props
  const {id, imageUrl} = choice

  const onClickChoice = () => {
    onOptingChoice(id)
  }
  return (
    <button
      type="button"
      className="choice-btn"
      data-testid={`${id.toLowerCase()}Button`}
    >
      <img
        alt={id}
        src={imageUrl}
        className="choice-item"
        onClick={onClickChoice}
      />
    </button>
  )
}
export default ChoiceItem
