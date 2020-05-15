import React from "react";
import "./style.css"
import Row from "../Row";
import Col from "../Col";

const SavedResults = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h3>Saved Books</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h3>Saved Books</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    <Col className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <br/>
                                    <Col className="bookInfo">
                                        <Row>
                                            <h2 className="bookTitle">{savedbook.title}</h2>
                                        </Row>
                                        <Row>
                                            <p className="bookAuthors">{savedbook.author}</p>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete Book
                                    </button>
                                    <a href={savedbook.link} target="_blank">
                                        <button className="viewBook btn btn-warning">
                                            View Book
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResults;