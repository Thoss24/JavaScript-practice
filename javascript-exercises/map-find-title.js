const getTheTitles = function(arr) {
    let titles = arr.map(title => `${title.title}`);
    return titles
};

// map() array function method constructs a new array containing the results. In this case the results are the titles of the books.

// original value of arr

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

  // altered value of arr 

  const alteredBooks = ['Book', 'Book2'];