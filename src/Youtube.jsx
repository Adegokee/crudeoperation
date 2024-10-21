import React, {createContext, useState, useEffect} from 'react'


export const Youtube = createContext() 

const YoutubeApi = ({children}) => {
    const [movie, setMovie] = useState([]);
    const [selected, setSelected]= useState([]);
    const [mysearch, setMySearch] = useState('');
    const getMyApi = async () => {
      // if (!mysearch) return; 
      
      // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyD8PtGw7UNYhfOGaYrzITtYoPcES3hN7iY&q=${mysearch}`; 
       let url = 'https://jsonplaceholder.typicode.com/posts';
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        localStorage.setItem('apiclass', JSON.stringify(data));
        setMovie(data);
        setSelected(data);
      } catch (error) {
        console.error('Fetch error:', error);
      };
    
    };

    useEffect(() => {
      getMyApi();
    },[])
    const addReview = async(newReview) => {
      let url = 'https://jsonplaceholder.typicode.com/posts';
      const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newReview),
      })
      const data = await response.json()
      setMovie([data, ...movie])
    }
    const deleteReview = async(id) => {
      if(window.confirm('Are you sure you want to delete this? ')){
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: "DELETE",
        })
        setMovie(movie.filter((item) => item.id !== id))
      }
    }
    const editReview = async (id, updatedReview) => {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      
      try {
        const response = await fetch(url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedReview),
        });
    
        if (!response.ok) {
          throw new Error('Failed to update the review');
        }
    
        const data = await response.json();
        
        // Update the movie state with the edited review
        setMovie((prevMovies) => 
          prevMovies.map(item => (item.id === id ? data : item))
        );
    
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
  return (
    <Youtube.Provider value={{ movie, setMovie, deleteReview,  selected, addReview, setSelected, mysearch, setMySearch, editReview}}>
        {children}
    </Youtube.Provider>
  )
}

export default YoutubeApi 