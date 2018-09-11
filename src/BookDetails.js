import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import AlteringLists from './AlteringLists'

class BookDetails extends Component {

    static propTypes = {
        shelf: PropTypes.toString.isRequired
    }

    state = {

        booksList: []

    }

    //Update what shelf book is on

    // updateShelf = () => {
    //
    //     const {book, shelf}= this.props
    //     BooksAPI.update(book, shelf).then((booksList) => {
    //         this.setState({ booksList })
    //     })
    // }

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

    //Render book

    render() {
        const { booksList, title, authors, imageLinks, shelf } = this.props

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                            backgroundImage: "url(" + this.props.imgURL + ")"
                        }}> </div>
                        <div className="book-shelf-changer">
                            <select value= {this.props.booksList} onChange={(event) => {this.updateShelf(event.target.value)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">{this.props.shelf}</option>
                                <option value="wantToRead">{this.props.shelf}</option>
                                <option value="read">{this.props.shelf}</option>
                                <option value="none">{this.props.shelf}</option>
                            </select>
                            {/*<div className="book-shelf-category">*/}
                                {/*<booksList shelf = {this.props.updateShelf} />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
            </div>
        )
    }
}


export default BookDetails