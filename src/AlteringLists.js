import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const { booksList } = this.props
class AlteringLists extends Component {

    state =  {
        booksList: []
    }

    //Function to filter the books based on what shelf they are on
    //Change the property of shelf based on what shelf a book is on

    categorizingBook = () => {
        BooksAPI.filter(this.state.booksList).then((booksList) => {
            if(this.props.shelf == 'currentlyReading'){
                this.setState({shelf: 'currentlyReading'})

            }else if(this.props.shelf == 'Read'){
                this.setState({shelf:'Read'})

            }else if(this.props.shelf =='wantToRead'){
                this.setState({shelf:'wantToRead'})

            }else{
                this.setState({shelf: ''})
            }

            this.setState({ booksList })
        })
    }


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