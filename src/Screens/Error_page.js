import React from 'react';
import '../Styles/error.css';
import { PreLoader } from '../components/Loader';
export function Error() {
    return (
        <div id="error-page">
            <div className="content">
                <div className='loader'>
                    <PreLoader />
                </div>
                <h2 className="header" data-text="4 4">
                </h2>
                <h4 >
                    Opps! Page not found
                </h4>
                <p>
                    Sorry, the page you're looking for doesn't exist.
                </p>
            </div>
        </div>)

}