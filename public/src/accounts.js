// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// return the account object when given a particular ID
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}
//return the list of accounts ordered by last name
function sortAccountsByLastName(accounts) {
  accounts.sort((account1, account2) =>
    account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

//return all of the books taken out by an account with the author embedded
function getTotalNumberOfBorrows(account, books) {
  const accountID = account.id;
  let count = 0;
  for (let book in books) {
    const bookRef = books[book];
    for (let borrow in bookRef.borrows) {
      const borrowID = bookRef.borrows[borrow];
      if (borrowID.id === accountID) {
        count += 1;
      }
    }
  }
  return count;
}



const merger = (books, authors) => {
  let mergedBooksAuthors = [];
  for (let i = 0; i < books.length; i++) {
    mergedBooksAuthors.push({
      ...books[i],
    });
  }
  for (let i = 0; i < mergedBooksAuthors.length; i++) {
    mergedBooksAuthors[i].author = {
      ...authors.find((author) => author.id === books[i].authorId),
    };
  }
  return mergedBooksAuthors;
};

// return all of the books taken out by an account with the author embedded
function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => 
  book.borrows.some(acc => acc.id === account.id && acc.returned === false))
  .map(book => { 
    let author = authors.find(author => author.id === book.authorId) 
    book.author = author; return book;
  })
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
