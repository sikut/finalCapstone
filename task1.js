//decalaration of an array for objects BOOK
let books=[];
//sessionStorage for the elements from libraryBooks putting  
sessionStorage.setItem("libraryBooks",JSON.stringify(books));
//creatin an object Book
function Book(author,title,genre,review){
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.review = review;
}
//function to laod books from the existing storageSession 
function loadBooks () {
    let libraryBooks = document.getElementById("bookList");
    libraryBooks.innerHTML=null;
    books = JSON.parse(sessionStorage.getItem("libraryBooks"));
    books.forEach((value,index) => {
        let paragraph = document.createElement("p");
        paragraph.id=index+1;
        paragraph.innerHTML = `Author: ${value.author}.<br>
        Title: ${value.title}.<br>
        Genre: ${value.genre}.<br>
        Review: ${value.review}.`;
        paragraph.className="design";
        libraryBooks.appendChild(paragraph);
    });
}
//function to add books to the libraryBooks
function addBook(){
    books = JSON.parse(sessionStorage.getItem("libraryBooks"));
    //getting values from the user input
    let form = document.querySelector("form");
    let name = form[0].value;
    let title = form[1].value; 
    let genre = form[2].value;
    let review = form[3].value;
    //creating a new Book object and assigning it to the book array
    let book = new Book(name,title,genre,review);
    books.push(book);
    sessionStorage.setItem("libraryBooks",JSON.stringify(books));
    //cleariing the input boxes 
    form[0].value="";
    form[1].value="";
    form[2].value="";
    form[3].value="";
    //applying loadBooks to get updated list on the screen
    loadBooks();
}
//fucntion to delete items from the book database
function deleteBook(){
    books = JSON.parse(sessionStorage.getItem("libraryBooks"));
    let form = document.querySelector("form");
    //delive using autor and title
    let name = form[0].value;
    let title = form[1].value;
    //finding relevant Book object in books using forEach
    books.forEach(element=>{
        if (name==element.author||title==element.title){
            //getting indexOF the matched element
            let removeIndex=books.indexOf(element);
            //removing element from the existing array
            books.splice(removeIndex,1);
        }
    })
    sessionStorage.setItem("libraryBooks",JSON.stringify(books));
    form[0].value="";
    form[1].value="";
    form[2].value="";
    form[3].value="";
    loadBooks();
}
//function to edit books database
function editBook(){
    books = JSON.parse(sessionStorage.getItem("libraryBooks"));
    let form = document.querySelector("form");
    //getting information from the user of which books to be updated
    let name = form[0].value;
    let title = form[1].value;
    let genre = form[2].value;
    let review = form[3].value;  
    //finding the relevan Book object with forEach
    books.forEach(element=>{
        if (name==element.author||title==element.title){
            //finding an elemnt using indexOf
            let removeIndex=books.indexOf(element);
            //creating a new Book object
            let book = new Book(name,title,genre,review);
            //replacing existing object with the updated one
            books.splice(removeIndex,1,book);
        }
    })
    sessionStorage.setItem("libraryBooks",JSON.stringify(books));
    form[0].value="";
    form[1].value="";
    form[2].value="";
    form[3].value="";
    loadBooks();
}

