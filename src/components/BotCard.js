import React from "react";

function BotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>

      {handleDelete && (
        <button className="delete-btn" onClick={handleDelete}>
          x
        </button>
      )}
      <button onClick={handleClick}>
        {handleDelete ? "Release" : "Add"}
      </button>
    </div>
  );
}

export default BotCard;
