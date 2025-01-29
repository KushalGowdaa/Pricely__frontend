import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCodeCompare, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo_no_bg  from '../assets/logo_no_bg.png';
import hero from '../assets/hero-img.png';
import hero2 from '../assets/hero_2.png';
import '../main.css';
import ProductSearch from './SearchBar';


const HomePage = () => {

  return (
    <div className="container-fluid font">
        <div className='container'>
            <br></br>
            <br></br>
            <div className='container align-items-center p-3'>
                <br></br>
                <div className='container bg rounded margin p-2'>
                    <h1 className='d-flex justify-content-center head-color fw-bolder font-2 display-1 align-items-center'><img src = {logo_no_bg} className='img-fluid' style={{width: 100, height: 100}}></img>Pricely</h1>

                    <h3 className='d-flex justify-content-center align-items-center head-color p-3 space col-md-12'>
                        <h1 className='m-2'>Search</h1><FontAwesomeIcon className='align-self-center' icon={faMagnifyingGlass} /> - <h1 className='m-2'>Compare</h1><FontAwesomeIcon className='align-self-center' icon={faCodeCompare} /> - <h1 className='m-2'>Buy</h1><FontAwesomeIcon className='align-self-center' style={{height: 40, width: 40}} icon={faCartShopping} />
                    </h3>
                    
                    <a href='#search'>
                        <button className='search-btn'>
                            Search now
                        </button>
                    </a>

                </div>
                <div className='row container rounded d-flex justify-content-center margin bg-light'>
                    <div className='col-md-6 border-color rounded m-4'>
                        <h2 className='m-2 font-color font-2 display-4'>
                            Search
                        </h2>
                        <p className='fs-4 m-3'>
                        Pricely's search engine helps users find and compare products quickly.
                        </p>
                    </div>
                
                    <div className='col-md-6 border-color rounded m-4'>
                        <h2 className='m-2 font-color font-2 display-4 '>
                            Compare
                        </h2>
                        <p className='fs-4 m-3'>
                        Pricely compares prices, discounts, and shipping costs to find the best deal.
                        </p>
                    </div>
                    <div className='col-md-6 border-color rounded m-4'>
                        <h2 className='m-2 font-color font-2 display-4 '>
                            Buy
                        </h2>
                        <p className='fs-5 m-3'>
                        Pricely offers buying options from the best deal provided by e-commerce website where user saves more.
                        </p>
                    </div>
                </div>
                <div className='container bg rounded'>
                    <div className='container row p-4'>
                        <div className='col-md-6'>
                            <img className='img-fluid' src={hero2} style={{height:300}}></img>
                        </div>
                        <div className='col-md-6 align-self-center'>
                            <h1 className='d-flex justify-content-center head-color fw-bolder display-4 font-2 p-4 align-items-center'>
                                Find the Best Deals in One Click!
                            </h1>
                        </div>
                    </div>

                    <div className='container row p-4'>
                        <div className='col align-self-center'>
                            <h3 className='font-2 head-color display-6 p-4'>
                                Tired of switching between multiple websites to compare prices?
                            </h3>
                        </div>
                        <div className='col'>
                            <img className='img-fluid float-right' src={hero} style={{height:400}}></img>
                        </div>
                    </div>

                    <h4 className='font head-color border-top p-4'>
                    
                        Pricely brings you the best deals from Amazon & Flipkart, and more—all in one place. 
                        Save time, save money, and shop smarter with real-time price comparisons. Start searching now and never overpay again! 🚀✨
                    </h4>
                </div> 
            </div>
        
            <br></br>

            <section id='search'>
                <ProductSearch></ProductSearch>
            </section>

            <br></br>
            <br></br>
        </div>
    </div>
  );
};

export default HomePage;