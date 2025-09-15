import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = ({ id, title, author, edition_count, first_publish_year, cover_img, viewMode }) => {
    return (
        <div className={`book-item ${viewMode === 'list' ? 'list-view' : 'grid-view'} flex`}>
            <div className='book-item-img'>
                <img src={cover_img} alt={`${title} cover`} />
            </div>

            <div className='book-item-info'>
                <Link to={`/book/${id}`}>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{title}</span>
                    </div>
                </Link>

                <div className='book-item-info-item author fs-15'>
                    <span className='text-capitalize fw-7'>Author: </span>
                    <span>{author?.join(", ")}</span>
                </div>

                <div className='book-item-info-item edition-count fs-15'>
                    <span className='text-capitalize fw-7'>Total Editions: </span>
                    <span>{edition_count}</span>
                </div>

                <div className='book-item-info-item publish-year fs-15'>
                    <span className='text-capitalize fw-7'>First Publish Year: </span>
                    <span>{first_publish_year}</span>
                </div>
            </div>
        </div>
    );
};

export default Book;
