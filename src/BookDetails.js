import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import ShelfLayout from './ShelfLayout'

class BookDetails extends Component {
    //
    // static propTypes = {
    //     shelf: PropTypes.toString().isRequired
    // }

    constructor(props) {
        super(props);
        this.state = {value: props.shelf}
    }

    state = {

        booksList: [],

    }

    shelfChange= function(event){
        this.setState({value:event.target.value});

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


    updateShelf = (value) => {

        const {book, id, shelf}= this.props
        BooksAPI.update({id: this.props.id, shelf: value}, value).then(({booksList}) => {
            if(value == 'currentlyReading'){

                this.setState({shelf: 'currentlyReading'})

            }else if(value == 'Read'){
                this.setState({shelf:'Read'})

            }else if(value  =='wantToRead'){
                this.setState({shelf:'wantToRead'})

            }else if(value == 'none') {
                this.setState({shelf: 'none'})
            }

        })
    }

    //Render book

    render() {
        const { booksList, title, authors, imageLinks, shelf, id} = this.props

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                            backgroundImage: "url(" + this.props.imgURL + ")"
                        }}> </div>
                        <div className="book-shelf-changer">
                            <select value= {this.state.value}
                                    onChange={(event) => {this.updateShelf(event.target.value)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read </option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
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