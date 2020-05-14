import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <div className="journeyTitle"><h3>Begin Your Imagination Journey</h3></div>
                <br/>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="bookSearch"
                    placeholder="Enter a Book Title"
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="submitBtnDiv">
            <button type="submit" className="submitBtn btn btn-info shadow" onClick={props.handleFormSubmit}>
                Submit
            </button>
            </div>
        </form>
    )
}



export default SearchForm