import React from 'react';
import '../App.css';
import Article from '../articles'
import BlogGrid from './bloggrid'

function Home() {
  return (
    <> 
    <h2 style={{ color: '#199cff' }}> Welcome to Home of shelter dogs</h2>     
     
      <BlogGrid />
    </>
  )
}
export default Home;