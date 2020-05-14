import React from "react";
import "./style.css";

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="title"><h3>Begin Your Imagination Journey</h3></label>
                <br/>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="bookSearch"
                    placeholder="Enter a Book Title"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-info" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchForm