import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Page404 = () => {
    return (
        <div className="body404">
            <h1 className="OOPS!">Oooops!</h1>
            <div className="error-container">
                <span>
                    <span>4</span>
                </span>
                    <span>0</span>
                <span>
                    <span>4</span>
                </span>
            </div>
            <div>
                <Link to="/">
                    <button className="btn btn-primary" >
                        Go home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page404;