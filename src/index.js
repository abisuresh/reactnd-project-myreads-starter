import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'

// const BOOKINFO =  [
//     {name: 'To Kill a Mockingbird', author: 'Harper Lee', imgURL: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")', category: ''},
//     {name: '1776', author: 'David McCullough', imgURL: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")', category:''},
//     {name:"Ender's Game", author:'Orson Scott Card', imgURL: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")', category:''},
//     {name:, author: "Harry Potter and the Sorcerer's Stone", imgURL: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")', category:''},
//     {name:, author:, imgURL:, category:''},
//     {name:, author:, imgURL:, category:''},
//     {name:, author:, imgURL:, category:''},
//     {name:, author:, imgURL:, category:''},
//     {name:, author:, imgURL:, category:''},
// ];

const blah = {
    "title":"The Linux Command Line",
    "subtitle":"A Complete Introduction",
    "authors":["William E. Shotts, Jr."],
    "publisher":"No Starch Press",
    "publishedDate":"2012",
    "description":"You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    "industryIdentifiers":[
        {"type":"ISBN_13","identifier":"9781593273897"},
        {"type":"ISBN_10","identifier":"1593273894"}
        ],
    "readingModes":{"text":true,"image":false},
    "pageCount":480,
    "printType":"BOOK",
    "categories":["COMPUTERS"],
    "averageRating":4,
    "ratingsCount":2,
    "maturityRating":"NOT_MATURE",
    "allowAnonLogging":true,
    "contentVersion":"1.2.2.0.preview.2",
    "panelizationSummary":{"containsEpubBubbles":false,"containsImageBubbles":false},
    "imageLinks":{
        "smallThumbnail":"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail":"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    "language":"en",
    "previewLink":"http://books.google.com/books?id=nggnmAEACAAJ&dq=linux&hl=&cd=3&source=gbs_api",
    "infoLink":"https://play.google.com/store/books/details?id=nggnmAEACAAJ&source=gbs_api",
    "canonicalVolumeLink":"https://market.android.com/details?id=book-nggnmAEACAAJ",
    "id":"nggnmAEACAAJ",
    "shelf":"currentlyReading"
};

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);


