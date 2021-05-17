// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
    return (books.length); //return the total number of books in the array
}

function getTotalAccountsCount(accounts) {
  return (accounts.length); //return the total number of accounts in the array
}

function getBooksBorrowedCount(books) { 
  return books.map((book) => book.borrows.filter(b => b.returned === false)).filter(c => c.length > 0).length; //return the total number of books that are currently borrowed
}

//return an ordered list of most common genres
function getMostCommonGenres(books) {
  let result = [];
  books.forEach(b => {
    if (result.findIndex(r => r.name === b.genre) >= 0){
      result[result.findIndex(r => r.name === b.genre)].count += 1 
    } else {
      result.push({name: b.genre, count: 1})
    }
  })
  result.sort((a,b) => b.count - a.count)
  return result.slice(0, 5);
  }//returns limited list to the top five


  //return an ordered list of most popular books
function getMostPopularBooks(books) {
  return books
  .map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  .sort((a,b) => b.count - a.count)
  .slice(0, 5);
}//returns limited list to the top five
 

//return an ordered list of most popular authors

function getMostPopularAuthors(books, authors) {
  let results = [];
authors.forEach(author => {
  let returnAuthor = {
    name: `${author.name.first} ${author.name.last}`, 
    count:0
  }
  books.forEach(book => {
    if (book.authorId === author.id) {
      returnAuthor.count += book.borrows.length
    }
  })
  results.push(returnAuthor);
})
return results.sort((countA, countB) => countB.count - countA.count).slice(0, 5);
}//returns limited list to the top five

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
