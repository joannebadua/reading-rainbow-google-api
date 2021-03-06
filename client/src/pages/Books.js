import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import API from "../controllers/bookControllers";
// dont need to import in the front end because this is a back-end file
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    query: ""
  };

  saveBook = (index) => {
    let bookData = this.state.books[index];
    
    const newBook = {
      title: bookData.volumeInfo.title,
      author: bookData.volumeInfo.authors,
      image: bookData.volumeInfo.image,
      link: bookData.volumeInfo.link,
      description: bookData.volumeInfo.description,
      googleId: bookData.volumeInfo.id
    }
    console.log("Tuesday", newBook)
    API.saveBook(newBook)
    console.log("newBook", newBook)
    // .then(res => {
    //   const newBookarr = this.state.books.filter((newBook) => {
    //       return newBook;
      // }
      // )
    // }) 
      // return all books but the one with the newBook.id

      // this.setState({
      //   books: newBookarr
      // })
    }
    handleInputChange = event => {
      //this handles input change in what the user types
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.query) {
          //user types "1984", and clicks submit. 
          //API.getBooks will get triggered - look at API.js file. API.getBooks
          API.getBooks(this.state.query)
          //fire off the API
            .then((res) => {
              // res => this.setState({
              //   books: res, 
              //   query: "",
              //   // query is what the user types in, and res is the thing that we get back
              // })
              console.log("google API :-)", res);
              //** */res will be the books from the google API which completes the cyclce
              this.setState({books: res.data})
              })          
        }
      };
    
      handleSaveBook = id => {
        const savedBook = this.state.books.filter(book => book.id === id)
        const bookDetails = {
          googleId: id,
        }
      }
      render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>What Books Should I Read?</h1>
                </Jumbotron>
                <form>
                  <Input
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    name="query"
                    placeholder="For Example: Noli Me Tangere (required)"
                  />
                  <FormBtn
                    disabled={!(this.state.query)}
                    onClick={this.handleFormSubmit}
                  >
                    Search
                  </FormBtn>
                </form>
              </Col>
              </Row>

              <Row>
              <Col size="md-6 sm-12">
                <Jumbotron>
                  <h1>Books On My List</h1>
                </Jumbotron>
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map((book, i) => (
                      <ListItem key={`googlebook-${i}`}>
                        <h4>{book.volumeInfo.title}</h4>
                        <h3>{book.volumeInfo.authors}</h3>
                        <img href={book.volumeInfo.image} alt={book.volumeInfo.title}/>
                        <p>{book.volumeInfo.description}</p>
                        <a href={book.volumeInfo.link}>View book</a><br></br>
                        <button onClick={()=>(this.saveBook(i))}>Save</button>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
        );
      }
    }


    export default Books;