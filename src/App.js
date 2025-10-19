import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  function addToArmy(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function removeFromArmy(id) {
    setArmy(army.filter((b) => b.id !== id));
  }

  function deleteBot(id) {
    fetch(`http://localhost:8001/bots/${id}`, { method: "DELETE" });
    setArmy(army.filter((b) => b.id !== id));
    setBots(bots.filter((b) => b.id !== id));
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRemove={removeFromArmy} onDelete={deleteBot} />
      <BotCollection bots={bots} onAdd={addToArmy} />
    </div>
  );
}

export default App;
