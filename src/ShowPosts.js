import React, { useEffect, useState } from 'react';
import List from './List';
import withListLoading from './WithListLoading';


function ShowPosts() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:5000/posts`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((posts) => {
        setAppState({ loading: false, posts: posts });
      });
  }, [setAppState]);
  return (
    <div className='ShowPosts'>
      <div className='container'>
        <h1>My Posts</h1>
      </div>
      <div className='post-container'>
        <ListLoading isLoading={appState.loading} posts={appState.posts} />
      </div>
      {/* <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Yasmeen
        </div>
      </footer> */}
    </div>
  );
}
export default ShowPosts;