import { useCallback, useState } from 'react';
import './App.css';
import MissionContainer from './components/Missions/index'
import MissionInfo from './components/Missions Info/index'

function App() {

  const [id, setId] = useState(25);
  const handleIdChange = useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="list col-3 list-group-item-dark overflow-scroll">
          <MissionContainer handleIdChange={handleIdChange} />
        </div>
        <div className="col-9">
          <MissionInfo id={id} />
        </div>
      </div>
    </div>
  );
}

export default App;
