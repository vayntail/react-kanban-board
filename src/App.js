
function App() {
  return (
    <div className="app-wrapper">
      <nav className="navbar"><h1>kanban boards</h1></nav>
      <main className="board">
        <h2 className="board-name">board name</h2>
        <div className="board-columns">
          <div className="column">
            <h3>todo</h3>
            <ul className="cards-list">
              <li className="card">first</li>
              <li className="card">first</li>
              <li className="card">first</li>
            </ul>
            <div>
              <button>add new</button>
            </div>
          </div>
          <div className="column">
            <h3>todo</h3>
            <ul className="cards-list">
              <li className="card">first</li>
              <li className="card">first</li>
              <li className="card">first</li>
            </ul>
            <div>
              <button>add new</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
