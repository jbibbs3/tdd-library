import { useState } from "react"

const NewBook = ({ addBook }) => {
    const [bookDetails, setBookDetails] = useState({title:"", author:""})

    const handleChange = (event) => {
        setBookDetails({
            ...bookDetails,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addBook(bookDetails);
        setBookDetails({ title: "", author: "" })
    }

    return (

        <form onSubmit={handleSubmit}>
            <h3>Add a Book</h3>
            <div><input type="text"
                name="title"
                placeholder="Title"
                value={bookDetails.title}
                onChange={handleChange}

            />

            </div>
            <div><input type="text"
                name="author"
                placeholder="Author"
                value={bookDetails.author}
                onChange={handleChange}

            />
            </div>
            <div>
                <button>Add Book</button>
            </div>
        </form>
    )

}


export default NewBook;