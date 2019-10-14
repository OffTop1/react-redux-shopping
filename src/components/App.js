import React, {Component} from 'react';
import axios from "axios";
import Navbar from "./Navbar";
import BookCard from "./BookCard";
import Filter from "./Filter";
import {Card} from "semantic-ui-react";
import {Container} from "semantic-ui-react";


class App extends Component {

  componentWillMount(){
    
    const {setBooks} = this.props;
    axios.get("/books.json")
    .then(({data})=>{
      setBooks(data);
    })
  }

  render(){
    console.log(this.props.books)
    const {books, isReady} = this.props;
    console.log(this.props)
    return (
      <Container >
        <Navbar />
        <Filter/>
        <Card.Group doubling
         itemsPerRow={4}>
          {!isReady? "Загрузка..." :
           books.map((book, i) =>( <BookCard key={i}  {...book}/> ))}
       </Card.Group>
      </Container>
    );
  }
 
}


export default App;
