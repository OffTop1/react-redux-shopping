import React, {Component} from 'react';
import axios from "axios";
import BookCard from "../containers/BookCard";
import Filter from "../containers/Filter";
import Navbar from "../containers/Menu";
import {Card} from "semantic-ui-react";
import {Container} from "semantic-ui-react";


class App extends Component {

  componentWillMount(){
    const {setBooks} = this.props;
    axios.get("/books.json")
    .then(({data})=>{
      setBooks(data);
    });
  }

  render(){
    console.log(this.props.books)
    const {books, isReady } = this.props;
    console.log(books)
    return (
      <Container >
        <Navbar />
        <Filter  />
        <Card.Group doubling stackable

         itemsPerRow={4}>
          {(!isReady || !books)? "Загрузка..." :
           books.map((book, i) =>( <BookCard key={i}  {...book}/> ))}
       </Card.Group>
      </Container>
    );
  }
 
}


export default App;
