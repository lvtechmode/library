// Note: Please do not change the name of the functions. The tests use those names to validate your code.

//return the author object when given a particular ID
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//return the book object when given a particular ID
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

//return an array with two arrays: borrowed books and returned books
function partitionBooksByBorrowedStatus(books) {
  const trueReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned)
  );
  const falseReturned = books.filter((book) =>
    book.borrows.some((borrow) => !borrow.returned)
  );
  const result = [];
  result.push(falseReturned);
  result.push(trueReturned);
  return result;
}

// return an array for a book of all borrowers with their information and return status
function getBorrowersForBook(book, accounts) {
  const borrow = book.borrows;
  const accountsbyBook = accounts.filter((account) =>
    borrow.find((status) => status.id === account.id)
  );
  for (let i = 0; i < accountsbyBook.length; i++) {
    for (let j = 0; j < borrow.length; j++) {
      if (borrow[j].id === accountsbyBook[i].id) {
        accountsbyBook[i].returned = borrow[j].returned;
      }
    }
  }
  return accountsbyBook;
}//returns limited list to ten borrowers

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
