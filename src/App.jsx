import "/src/App.css";

function App() {
  
  const login = () => {

  }

  return (
    <div className="main-container">
      <div className="auth-buttons">
        <button onClick={() => login()} className="button-aizhu">Auth Aizhu</button>
        <button onClick={() => login()} className="button-jamie">Auth Jamie</button>
        <button onClick={() => login()} className="button-yong">Auth Yong the Admin</button>
      </div>
      <textarea
        name="display"
        id=""
        cols="30"
        rows="10"
        value="hello"
        readOnly
      />
    </div>
  );
}

export default App;
