
import Header from "./components/Header";
function App() {

/*   const title = "Indumela Stonkraft";
  const description = "it provides a wide range of products";
  const comments = [
    {
      "id": 1, 
      "text": "comment one"
    },
    {
      "id": 2, 
      "text": "comment Two"
    },
    {
      "id": 3, 
      "text": "comment Three"
    }
  ]

  const loading = false;
  if(loading) { return "Loading..." }  // to change the state while fetching the details of the website

  const showComments= true  // to show and hide the comments

  const commentBlock = (
    <div>
  <p>Comments({comments.length})</p>
  <ul>
    {comments.map((comment)=>{
      return <li key={comment.id}>{comment.text} </li>
    })}
  </ul>
  </div>) */

  return (
    <>
    <Header />  
    <div className="App">
        <h1>My app</h1>
         
    </div>
    </>
  );
}

export default App;
