import React, { useRef, useEffect, useState } from 'react';
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import "./SearchForm.css";

const SearchForm = () => {
    const { setSearchTerm, setResultTitle } = useGlobalContext();
    const searchText = useRef('');
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        searchText.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempSearchTerm = inputValue.trim();

        if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
            setSearchTerm("the lost world");
            setResultTitle("Please Enter Something ...");
        } else {
            setSearchTerm(tempSearchTerm);
        }

        navigate("/book");
    };

    const handleClear = () => {
        setInputValue('');
        setSearchTerm('');
        setResultTitle('Start typing to search...');
        searchText.current.focus();
    };

    return (
        <div className='search-form'>
            <div className='container'>
                <div className='search-form-content'>
                    <form className='search-form' onSubmit={handleSubmit}>
                        <div className='search-form-elem flex flex-sb bg-white'>
                            <input
                                type="text"
                                className='form-control'
                                placeholder='The Lost World ...'
                                ref={searchText}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            {inputValue && (
                                <button
                                    type="button"
                                    className='flex flex-c clear-btn'
                                    onClick={handleClear}
                                    title="Clear search"
                                >
                                    <FaTimes className='text-red' size={20} />
                                </button>
                            )}
                            <button
                                type="submit"
                                className='flex flex-c'
                                title="Search"
                            >
                                <FaSearch className='text-purple' size={32} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
