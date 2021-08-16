import React from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = React.useState({});
  const [id, setId] = React.useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = React.useState(1);

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input
        type='text'
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />{" "}
      <button type='button' onClick={handleClick}>
        Fetch Post
      </button>
      <h2>{post.title}</h2>
    </div>
  );
}

export default DataFetching;
