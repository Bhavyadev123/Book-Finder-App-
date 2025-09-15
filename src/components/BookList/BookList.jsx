import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const BookList = () => {
    const { books, loading, resultTitle } = useGlobalContext();
    const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: singleBook.id.replace("/works/", ""),
            cover_img: singleBook.cover_id
                ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
                : coverImg
        };
    });

    if (loading) return <Loading />;

    return (
        <section className='booklist'>
            <div className='container'>
                <div className='section-title flex flex-sb'>
                    <h2>{resultTitle}</h2>
                    <div className="view-toggle-group">
                        <button
                            className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                            onClick={() => setViewMode('grid')}
                            title="Grid View"
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/24/grid-2.png"
                                alt="Grid"
                                className="view-icon"
                            />
                        </button>
                        <button
                            className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                            onClick={() => setViewMode('list')}
                            title="List View"
                        >
                            <img
                                src="https://img.icons8.com/ios-filled/24/list.png"
                                alt="List"
                                className="view-icon"
                            />
                        </button>
                    </div>
                </div>

                <div className={`booklist-content ${viewMode === "grid" ? "grid" : "list"}`}>
                    {
                        booksWithCovers.slice(0, 30).map((item, index) => (
                            <Book key={index} {...item} viewMode={viewMode} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default BookList;