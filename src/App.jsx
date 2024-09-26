import React, { useEffect, useState } from "react";
import emojiData from "./emojiData.json";
import "./style.css"
function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);

  return (
    <div>
      <h1>Emoji Search</h1>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {data.map((emoji) => (
        <h2 key={emoji.title}>
          {emoji.title} {emoji.symbol}
        </h2>
      ))}
    </div>
  );
}

export default App;
