import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksSearch from './BooksSearch'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import serializeForm from 'form-serialize'
import './App.css'
import BookDetails from './BookDetails'
import ShelfLayout from './ShelfLayout'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    //Create empty array to hold all of books
      booksList: [],

      //Set initial state for displaying search page
      showSearchPage: false,

    }

    //Adding a life cycle method
    componentDidMount(){
      BooksAPI.getAll().then((booksList) => {
        this.setState({ booksList })
      })
    }

    //function to update an individual book in the state
    bookStateUpdate(id, shelf) {
      this.state.booksList.filter((book) => book.id === id)[0]
    }

  //render page
    // Add state updates to books
    // Update and expand  functionality for search
    // Use Route to make sure back-page and forward-page work as expected

  render() {
    return (
        <div>

          <div className="app">
           <div>
               <Route exact path="/search" render={() => (
                   <BooksSearch/>
               )}/>
              <Route exact path="/" render={() => (
                  <div className="list-books">
                    <div className="list-books-title">
                      <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                      <div>
                        <div className="bookshelf">
                          <h2 className="bookshelf-title">Currently Reading</h2>
                          <div>
                            <div className="bookshelf-books">
                              <ol className="books-grid">
                                  {this.state.booksList.filter((book) => book.shelf === 'currentlyReading').map((book) => {

                                      return (<li> <BookDetails
                                          // value = {this.state.query.bind}
                                          // onChange={(event) => {this.updatingShelfLayout(event.target.value)} }
                                          id = {book.id} key = {book.id} imgURL= {book.imageLinks.thumbnail} title= {book.title} authors= {book.authors}
                                          shelf={book.shelf}
                                      /></li>)

                                  })}
                              </ol>
                            </div>
                          </div>
                        </div>
                        <div className="bookshelf">
                          <h2 className="bookshelf-title">Want to Read</h2>
                          <div>
                            <div className="bookshelf-books">
                              <ol className="books-grid">
                                  {this.state.booksList.filter((book) => book.shelf === 'wantToRead').map((book) => {

                                      return (<li> <BookDetails
                                          // value = {this.state.query.bind}
                                          // onChange={(event) => {this.updatingShelfLayout(event.target.value)} }
                                          id = {book.id} key = {book.id} imgURL= {book.imageLinks.thumbnail} title= {book.title} authors= {book.authors}
                                          shelf={book.shelf}
                                      /></li>)

                                  })}
                              </ol>
                            </div>
                          </div>
                        </div>
                        <div className="bookshelf">
                          <h2 className="bookshelf-title">Read</h2>
                          <div>
                            <div className="bookshelf-books">
                              <ol className="books-grid">
                                  {this.state.booksList.filter((book) => book.shelf === 'read').map((book) => {

                                      return (<li> <BookDetails
                                          // value = {this.state.query.bind}
                                          // onChange={(event) => {this.updatingShelfLayout(event.target.value)} }
                                          id = {book.id} key = {book.id} imgURL= {book.imageLinks.thumbnail} title= {book.title} authors= {book.authors}
                                          shelf={book.shelf}
                                      /></li>)

                                  })}
                              </ol>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              )}
              />

                <div className="open-search">
                  <Link className="open-search" to="/search">Add a book</Link>
                  {/*<Route exact path="/search" render={() => (*/}
                      {/*<BooksSearch />*/}
                  {/*)}/>*/}
                  {/*<a  onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>*/}
                </div>
              </div>
          </div>

        </div>
        )
      }
    }

export default BooksApp
