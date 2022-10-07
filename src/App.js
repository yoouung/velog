import logo from './logo.svg';
import './App.css';

function App() {

  let user_id = 'yoouung';

  return ( // 화면
    <div className = "App">

      <div className = "header-left">
        <img className = "page-logo" src="image/emoji.png"></img>
        <h3>yolog</h3>
      </div>

      <div className = "main-container">
        <img className = "profile-image" src="image/emoji.png"></img>
        <h3 className = "user-id">{ user_id }</h3>
      </div>

    </div>
  );
}

export default App;
