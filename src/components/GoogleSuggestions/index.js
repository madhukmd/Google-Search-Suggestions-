import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  sentenseChange = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchItems = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <div className="Container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-icon"
          />
          <div className="searchContainer">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="searchIcon"
              />
              <input
                type="search"
                className="input"
                onChange={this.onSearchInput}
                value={searchInput}
                placeholder="Search Google"
              />
            </div>
            <ul className="listContainer">
              {searchItems.map(eachItem => (
                <SuggestionItem
                  listItem={eachItem}
                  key={eachItem.id}
                  sentenseChange={this.sentenseChange}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
