import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const { booksList } = this.props

class BooksSearch extends Component {
    static propTypes = {
        booksList: PropTypes.array.isRequired
    }

    state = {

    }

    //Create function to search for books
    findingBook = () => {
        // booksList.filter(name => this.booksList.name){

        const resultSearch = booksList.find(function(elem){
            const result = booksList.str.search(elem)
            return result
        })

        if(resultSearch){


        }
    }

    render() {
        const { booksList } = this.props
        return (
            <div>
                <div className= "bookList-details">
                    <p>{booksList.name}</p>
                    <p>{booksList.author}</p>
                    <p>{booksList.img} </p>
                    <p>{booksList.state}</p>
                </div>
            </div>
            )
        }
    }

    export default BooksSearch