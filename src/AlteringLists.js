import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import App from './App'

class AlteringLists extends Component {

    static propTypes = {
        shelf: PropTypes.toString.isRequired
    }

    state =  {
        booksList: []
    }

    //Function to filter the books based on what shelf they are on
    //Change the property of shelf based on what shelf a book is on


    updateShelf = () => {

        const {book, shelf}= this.props
        BooksAPI.update(book, shelf).then(({booksList}) => {
            if(this.props.shelf == 'currentlyReading'){

                this.setState({shelf: 'currentlyReading'})

            }else if(this.props.shelf == 'Read'){
                this.setState({shelf:'Read'})

            }else if(this.props.shelf =='wantToRead'){
                this.setState({shelf:'wantToRead'})

            }else{
                this.setState({shelf: 'none'})
            }

            this.setState({ booksList })
        })
    }

    // categorizingBook = () => {
    //     BooksAPI.filter(this.state.booksList).then((booksList) => {
    //         if(this.props.shelf == 'currentlyReading'){
    //             this.setState({shelf: 'currentlyReading'})
    //
    //         }else if(this.props.shelf == 'Read'){
    //             this.setState({shelf:'Read'})
    //
    //         }else if(this.props.shelf =='wantToRead'){
    //             this.setState({shelf:'wantToRead'})
    //
    //         }else{
    //             this.setState({shelf: 'none'})
    //         }
    //
    //         this.setState({ booksList })
    //     })
    // }

    //Function to add a new book (that isn't already on a list) to a list- addBook function

    addBook = (booksList) => {
        this.setState()
    }

    //Function to remove book from list (switch to none)- removeBook function

    removeBook = (booksList) => {
        this.setState()
    }


    render() {
        const booksList = this.state.booksList

        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        <li>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193,
                                                        backgroundImage: "url(" + this.props.imgURL + ")" }} ></div>
                                                    <div className="book-shelf-changer">
                                                        <select value= {this.props.booksList} onChange= {booksList.updateShelf}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{this.props.title}</div>
                                                <div className="book-authors">{this.props.authors}</div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlteringLists