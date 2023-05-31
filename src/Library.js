import { useState } from "react"
import Shelf from "./Shelf"
import NewShelfForm from "./NewShelfForm";
import { Link, NavLink, Route, Routes } from "react-router-dom";


const Library = () => {
  const [shelves, setShelves] = useState([{
    genre: 'Fiction',
    books: [
      { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
      { title: '1984', author: 'George Orwell' },
      { title: 'Beloved', author: 'Toni Morrison' },
      { title: 'The Color Purple', author: 'Alice Walker' },
    ],
  },
  {
    genre: 'Non-Fiction',
    books: [
      { title: 'Sapiens', author: 'Yuval Noah Harari' },
      { title: 'Beloved', author: 'Toni Morrison' },
      { title: 'The Audacity Of Hope', author: 'Barack Obama' },
      { title: 'The Autobiography of Malcolm X', author: 'Alex Haley' },
      { title: 'Between The World And Me', author: 'Ta-Nehasi Coates' },
    ],
  },])
  const [expandedShelves, setExpandedShelves] = useState(shelves.map(() => false));

  const addShelf = (newShelf) => {
    setShelves([...shelves, newShelf]);
    setExpandedShelves([...expandedShelves, false]);
  };

  const addBook = (book, shelfIndex) => {
    setShelves(shelves.map((shelf, index) => {
      if (index === shelfIndex) {
        return { ...shelf, books: [...shelf.books, book] };
      } else {
        return shelf;
      }
    }));
  };

  const toggleShelf = (index) => {
    setExpandedShelves(expandedShelves.map((expanded, i) => (i === index ? !expanded : expanded)));
  };

  return (
    
      <section>
        <NewShelfForm addShelf={addShelf} />
        {shelves.map((shelf, index) => (
          <div key={index}>
            <Link to={`/shelf/${Shelf.genre}`}>{Shelf.genre}</Link>
            {expandedShelves[index] && <Shelf genre={shelf.genre} books={shelf.books} />}
          </div>
        ))}
        {shelves.map((shelf, index) => (
          <Shelf key={index} genre={shelf.genre} books={shelf.books} addBook={(book) => addBook(book, index)} />
        ))}
      </section>
    
  )

}



export default Library