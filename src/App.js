import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NestedList from './components/NestedList';
import { Grid, Button } from '@material-ui/core';

export default function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=40');
      setList(response.data);
    }
    fetchApi();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Cat Facts</h1>
          <Grid container justify = "center">
            <NestedList items={list}></NestedList>
          </Grid>
       </div>
    </div>
  );
}