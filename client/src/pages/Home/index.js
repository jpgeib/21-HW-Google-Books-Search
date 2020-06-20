import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Enter book name..."
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
            .then(res => {
                this.setState({
                    books: res.data
                })
            }).catch(() => {
                this.setState({
                    books: [],
                    message: "No books found, try a different title."
                })
            });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
    };

    handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };

    render() {
        return(
            <Container>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">
                                <strong>Google Books Search</strong>
                            </h1>
                            <h2 className="text-center">Search for and Save Books of Interest.</h2>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}