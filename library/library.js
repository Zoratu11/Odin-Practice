const gridContainer = document.querySelector(".grid-container");
const formContainer = document.querySelector("#form-container");
const showBookFormButton = document.querySelector("#show-form-btn");
const closeBookFormButton = document.querySelector("#close-form-btn");
const addBookButton = document.querySelector("#add-book-btn");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const isReadInput = document.getElementById("isRead");

let myLibrary = [];

function Book(title, author, numOfPages, isRead) {
    //constructor
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

Book.prototype.hasBeenRead = function (isRead) {
    this.isRead = isRead;
}

function validateForm() {
    const inputs = document.querySelectorAll("input");
    for(let i = 0; i < inputs.length; i++ ) {
        if(inputs[i].value === "") {
            alert("input value is empty");
            return false;
        }
    }
    return true;
}

function showBookForm() {
    formContainer.classList.add("flex-container");
}

function closeBookForm() {
    //Now empty everything and dissapear the div
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    isReadInput.checked = false;
    formContainer.classList.remove("flex-container");
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function generateBookCards() {
    for(let i = 0; i < myLibrary.length; i++) {
        //use this to check if the book has already been added
        const currentTitle = document.getElementById(`title${i}`);
        if(currentTitle === undefined || currentTitle === null) {
            console.log(`${i}. ${JSON.stringify(myLibrary[i])}`);

            const htmlBookDiv = `
                <p id="title${i}"></p>
                <p id="author${i}"></p>
                <p id="pages${i}"></p>
                <label for="isRead">Has been read: </label>
                <input type="checkbox" id="isRead${i}"></p>
                <button style="background-color: #B22222; margin-bottom: 8px;" 
                class="btn" id="remove-book-btn-${i}">Remove Book</button>
            `;

            const bookDiv = document.createElement("div");
            bookDiv.classList.add("card");
            bookDiv.innerHTML = htmlBookDiv;
            gridContainer.appendChild(bookDiv);

            const title = document.getElementById(`title${i}`);
            const author = document.getElementById(`author${i}`);
            const pages = document.getElementById(`pages${i}`);
            const isRead = document.getElementById(`isRead${i}`);
            const removeBookButton = document.getElementById(`remove-book-btn-${i}`);

            isRead.addEventListener("change", () => {
                let isRead = !myLibrary[i].isRead;  //flip bool value with !
                myLibrary[i].isRead = isRead;
            });

            removeBookButton.addEventListener("click", () => {
                myLibrary = myLibrary.filter((book) => book !== myLibrary[i]);
                const parentDiv = title.parentElement;
                //remove all cards because the old ones are outdated now, 
                //shouldnt be a performance problem in this project
                gridContainer.innerHTML = "";

                //we removed all the cards so add them again but this time with the correct id
                generateBookCards();
            });

            title.textContent = `Title: ${myLibrary[i].title}`;
            author.textContent = `Author: ${myLibrary[i].author}`;
            pages.textContent = `Pages: ${myLibrary[i].numOfPages}`;
            isRead.checked = myLibrary[i].isRead;
        }
    }
}

showBookFormButton.addEventListener("click", showBookForm);
closeBookFormButton.addEventListener("click", closeBookForm);

addBookButton.addEventListener("click", (event) => {
    event.preventDefault();

    if(validateForm()) {
        const book = new Book(titleInput.value, authorInput.value, 
                            pagesInput.value, isReadInput.checked);
        
        addBookToLibrary(book);

        closeBookForm();

        //display the new books
        generateBookCards();
    } else {
        alert("You didn't fill out the form correctly. You missed filling in an input!!");
    }
}, );

const theHobbit = new Book("The hobbit", "JRR Tolkien", 345, true);

const cradle = new Book("Cradle", "Will Wright", 450, true);

const unsouled = new Book("Unsouled", "Will Wright", 563, false);

addBookToLibrary(theHobbit);
addBookToLibrary(cradle);
addBookToLibrary(unsouled);

generateBookCards();