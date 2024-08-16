const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Pride and Prejudice", author: "Jane Austen" }
  ];
  
  function sortTitles(titles) {
    return titles.sort();
  }
  
  function extractTitles(books, callback) {
    const titles = books.map(book => book.title);
    return callback(titles);
  }
  
  const sortedTitles = extractTitles(books, sortTitles);
  console.log(sortedTitles);
  