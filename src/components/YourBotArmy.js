import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, onRemove, onDelete }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-container">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleClick={() => onRemove(bot.id)}
            handleDelete={() => onDelete(bot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
