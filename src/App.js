import React, {useState, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Posts from './components/Posts'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import './App.css';

const App = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)


  useEffect(() => {
    getActors()
  }, [])

  const getActors = async () => {
    setLoading(true)
    let res = await fetch('https://www.breakingbadapi.com/api/characters')
    let data = await res.json()
    setPosts(data)
    setLoading(false)
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

// change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <Navbar />
      <div style={{margin: '0 auto', width: "80%"}}>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
          <Posts posts={currentPosts} loading={loading} />
      </div>
    </div>
  );
}

export default App;

