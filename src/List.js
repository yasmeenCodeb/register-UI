import React from 'react';


const List = (props) => {
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>No repos, sorry</p>;
  return (
    <center>
    <table border="1">
      {/* <h2 className='list-head'>Available Posts</h2> */}
      <tr>
            <th> Name </th>
            <th> Email</th>
      </tr>
      {posts.map((post) => {
        return (
          <tr key={post.id} className='list'>
            <td className='name'>{post.name} </td>
            <td className='email'>{post.email}</td>
          </tr>
        );
      })}
    </table>
    </center>
  );
};
export default List;