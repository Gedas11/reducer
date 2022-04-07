import {useGlobalContext} from './components/context/LikeContext'
import './App.css';


function App() {
  const {likes, setLike, removeLike} =  useGlobalContext()
  return (
    <div className="App">
      <h1>reducer</h1>
      <p>like: {likes}</p>
      <button onClick={setLike}>like</button>
      <button onClick={removeLike}>dislike</button>
    </div>
  );
}

export default App;
