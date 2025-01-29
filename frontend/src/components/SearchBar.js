// src/components/ProductSearch.js
import React, { useState } from 'react';
import axios from 'axios'; 
import '../main.css';

const ProductSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(null);
    // const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            const response = await axios.get(`https://pricely-vyy4.onrender.com/api/compare/`, {
                params: { query },
            });
            setResults(response.data);
            // setSuggestions([]);
        } catch (err) {
            setError('Error fetching product data.');
        } finally {
             setLoading(false);
        }
    };
    
    // const fetchSuggestions = async (input) => {
    //     if (input.trim() == '') {
    //         setSuggestions([]);
    //         return;
    //     }
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(`http://localhost:8000/api/suggestions/`, {
    //             params: { query: input },
    //         });
    //         setSuggestions(response.data.suggestions);
    //     } catch (err) {
    //         console.error("Error fetching suggestions:", err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect (() => {
    //     if (query) {
    //         fetchSuggestions(query);
    //     }
    // }, [query]);

    return (
        <div className="container border-color rounded margin">
            <br></br>
            <br></br>
            {/* <h1 className='d-flex justify-content-center m fw-bold font-color display-4 align-items-center'><img src={logo} className='img-fluid rounded-circle m-3' style={{width: 60, height: 60,}}></img>Pricely Compare</h1> */}
            <h5 className='d-flex justify-content-center fw-bold font-color'>Pricely fetches relevant results then compares the prices and provides the best value website through which you can buy your product.</h5>
            <br></br>
            <form onSubmit={handleSearch} className='d-flex justify-content-center' >
                <div className="input-group input-group-md-6 rounded p-4">
                    <input
                        type="text"
                        className="form-control rounded border-color"
                        placeholder="Search for a product"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    
                    {/* Suggestions dropdown
                    {suggestions.length > 0 && (
                        <div className="list-group position-absolute w-100 mt-1">
                        {suggestions.map((suggestion, index) => (
                            <a
                            key={index}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setQuery(suggestion.title); // Fill input with suggestion
                                setSuggestions([]); // Clear suggestions on selection
                                    }}
                                    className="list-group-item list-group-item-action d-flex align-items-center"
                                    >
                                    <img
                                    src={suggestion.image}
                                    alt={suggestion.title}
                                    className="img-thumbnail mr-3"
                                    style={{ width: '50px', height: '50px' }}
                                    />
                                    <span>{suggestion.title}</span>
                                    </a>
                                    ))}
                                    </div>
                                    )}*/}
                    <button type="submit" className="btn-submit border-color rounded ">Search</button>
                    <div className='container d-flex justify-content-center m-3'>
                        {loading && <div className="loader" role="status"></div>}
                    </div>
                </div>
            </form>

            {error && <p className="text-danger">{error}</p>}

            {results && (
                <div className='container'>
                    <h1 className='d-flex justify-content-center font-color m-4'>
                        Relevant Results
                    </h1>
                    <div className='row border p-4 m-3'>
                        <h2 className='d-flex justify-content-center font-color p-3'>
                            Amazon
                        </h2>
                        <div className='col-md-4 d-flex justify-content-center'>
                            <img src= {results.amzn_product_image} alt='product_image' className='img-fluid rounded mb-4' style={{width: 100, height: 120}}></img>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center'>
                            <h5 className='text-justify'>{results.amzn_product_title}</h5>
                        </div>
                        <div className='col-md-4 d-flex flex-column align-items-end'>
                            <p className='fw-bold'>₹{results.comparison.amazon}</p>
                            <a className="btn-submit border-color rounded mt-3" target="_blank" rel='noreferrer' href={results.amzn_product_url}>Amazon</a>
                            
                        </div>
                    </div>
                    <div className='row border p-4 m-3'>
                        <h2 className='d-flex justify-content-center font-color p-3'>
                            Flipkart
                        </h2>
                        <div className='col-md-4 d-flex justify-content-center'>
                            <img src= {results.flipkart_image} className='img-fluid rounded mb-4' style={{width: 100, height: 120}}></img>
                        </div>
                        <div className='col-md-4 d-flex justify-content-center'>
                            <h5 className='text-justify'>{results.flipkart_product_title}</h5>
                        </div>
                        <div className='col-md-4 d-flex flex-column align-items-end'>
                            <p className='fw-bold'>₹{results.comparison.flipkart}</p>
                            <a className="btn-submit border-color rounded mt-3" target="_blank" rel='noreferrer' href={results.flipkart_product_url}>Flipkart</a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 p-3 rounded align-self-center'>
                            <h2 className='d-flex justify-content-center mb-3  font-color'>Comparison Results</h2>
                            <ul className='list-group'>
                                <li className='list-group-item border-bottom d-flex justify-content-center mb-3'> <strong className='m-2'>Amazon Price: </strong> <p className='m-2'>₹ {results.comparison.amazon || 'Not available'}</p></li>
                                <li className='list-group-item d-flex justify-content-center mb-3'><strong className='m-2'>Flipkart Price:</strong> <p className='m-2'>₹ {results.comparison.flipkart || 'Not available'}</p></li>
                                <li className='list-group-item d-flex justify-content-center mb-3'><p className='m-2'>The minimum amount is ₹ {results.minPrice} </p></li>
                            </ul>
                        </div>
                        <div className='col-md-6 p-3 rounded'>
                            <h2 className='d-flex justify-content-center mb-3 font-color'>Savings</h2>
                            <ul className='list-group'>
                                {Object.entries(results.savings).map(([site, saving]) => (
                                    <li className='list-group-item d-flex justify-content-center mb-3' key={site}>
                                        <p className='m-2'><strong className='m-2'>{site.charAt(0).toUpperCase() + site.slice(1)}</strong>: {saving}% savings</p>
                                    </li>
                                ))}
                                <li className='list-group-item d-flex justify-content-center mb-3 border-3 border-success'>{results.message && <p className='text-justify m-2 text-success fw-bold'>{results.message}</p>}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
            {/* <div className='container'>
                <ul className='list-group'>
                    <li className='list-group-item d-flex justify-content-center mb-3'> <img src={results.amzn_product_image}></img> amazon URL :{results.amzn_product_url}</li>
                    <li className='list-group-item d-flex justify-content-center mb-3'>flipkart URL : {results.flipkart_product_url}</li>
                </ul>
            </div> */}
        </div>
    );
};

export default ProductSearch;
