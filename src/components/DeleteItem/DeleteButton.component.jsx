import './DeleteButton.styles.scss';

const DeleteButton = ({admin, handleDeleteItem, id, categoryIndex, itemIndex}) => {
    return(
        admin && (
            <button 
              className="delete-item-button"
              onClick={() => handleDeleteItem(id, categoryIndex,itemIndex)}
            >
              Delete
            </button>
  )
    )
}

export default DeleteButton;