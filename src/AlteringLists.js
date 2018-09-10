import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const { booksList } = this.props
class AlteringLists extends Component {
    
    render() {
        const { booksList } = this.props

        //Component to change lists

        changeList = (booksList) => {
            this.setState()
        }

        //Function to add a new book (that isn't already on a list) to a list- addBook function

        addBook = (booksList) => {
            this.setState()
        }

        //Function to remove book from list (switch to none)- removeBook function

        removeBook = (booksList) => {
            this.setState()
        }

        return (
            <div>
                <div className= "bookList-details">
                    <p>{booksList.category}</p>
                </div>
            </div>
        )
    }
}

export default AlteringLists