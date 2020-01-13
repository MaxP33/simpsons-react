import React from 'react';
import './QuoteApi.css'

function QuoteApi({ quotes }) {
    return (
        <figure className="QuoteApi">
        <img 
        src={quotes.image} 
        alt={quotes.character}></img>
        <figcaption>
            <blockquote>
                {quotes.quote}
            </blockquote>
            <p>
                <cite>{quotes.character}</cite>
            </p>
        </figcaption>
    </figure>
    );
  };
  
export default QuoteApi;
