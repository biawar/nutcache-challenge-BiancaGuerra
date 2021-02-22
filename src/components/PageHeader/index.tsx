import React from 'react';

import { FaArrowLeft, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <FaArrowLeft color="white" size="3rem"/>
                </Link>
                <text className="back-text">Back</text>
            </div>

            <div className="header-content">
                <FaUsers color="whitesmoke" size="4.5rem"/>
                <strong>{props.title}</strong>  
            </div>
            </header>   
    );
}

export default PageHeader;