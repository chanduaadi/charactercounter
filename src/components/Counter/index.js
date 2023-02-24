import {Component} from 'react'
import {v4} from 'uuid'

import CharacterCount from '../CharacterCount'

import './index.css'

class Counter extends Component {
  state = {
    inputValue: '',
    listItems: [],
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddCharacter = event => {
    event.preventDefault()

    const {inputValue, listItems} = this.state

    const newListObj = {
      id: v4(),
      word: inputValue,
    }

    this.setState({listItems: [...listItems, newListObj], inputValue: ''})
  }

  render() {
    const {inputValue, listItems} = this.state
    const isEmpty = listItems.length === 0
    return (
      <div className="page-bg-container">
        <div className="page-total-card-container">
          <div className="character-count-display-card-container">
            <div className="inner-card-container">
              <h1 className="count-heading">
                Count the characters like a Boss...
              </h1>
            </div>
            <ul className="added-list-items-container">
              {listItems.map(eachItem => (
                <CharacterCount key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
            {isEmpty && (
              <img
                className="no-user-img"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
          <div className="character-count-add-container">
            <h1 className="character-counter-text">Character Counter</h1>
            <form
              className="add-input-container"
              onSubmit={this.onAddCharacter}
            >
              <input
                type="text"
                className="input-container"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                value={inputValue}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
