import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookDetails extends Component {

    //Constructor to set the state of value in select option for dropdown
    constructor(props) {
        super(props);
        this.state = {value: props.shelf}
        // this.updateCallback = this.updateCallback.bind(this)
    }

    state = {

        booksList: [],

    }

    shelfChange= function(event){
        this.setState({value:event.target.value});

    }

    //Adding a life cycle method
    //Unmounting BookDetails component's API call
    componentWillUnmount(){
        this.mount= false;
    }

    //Update what shelf book is on
        //Function to filter the books based on what shelf they are on
        //Change the property of shelf based on what shelf a book is on

    updateShelf = (value) => {
        this.props.updateCallback(this.props.id, value)

        // const {book, id, shelf}= this.props
        BooksAPI.update({id: this.props.id, shelf: value}, value).then(() => {
            // if(value == 'currentlyReading'){
            //     this.setState({shelf: 'currentlyReading'})
            //
            // }else if(value == 'read'){
            //     this.setState({shelf:'read'})
            //
            // }else if(value  =='wantToRead'){
            //     this.setState({shelf:'wantToRead'})
            //
            // }else if(value == 'none') {
            //     this.setState({shelf: 'none'})
            // }

            this.setState({shelf: value.bind})
        })
    }

    //Render book

    render() {
        const { booksList, title, authors, shelf, id} = this.props
        let { imgURL, backupImage, imageLinks, thumbnail} = this.props

        if((this.props.imageLinks===undefined)){
            imageLinks= "http://via.placeholder.com/128x193?text=?"
        }else{
            imageLinks = this.props.imageLinks.thumbnail
        }

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                            backgroundImage: "url(" + imageLinks + ")"
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