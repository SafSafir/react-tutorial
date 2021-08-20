import React from "react";
import axios from "axios";

function DataFetchingOne() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [post, setPost] = React.useState({});

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("something went wrong!");
      });
  }, []);

  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
