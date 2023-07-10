import axios from "axios";
import { useEffect, useState } from "react";
import { ItemsIndex } from "./ItemsIndex";

export function Content() {
  const [items, setItems] = useState([]);
  const handleIndexItems = () => {
    console.log("handleIndexItems");
    axios.get("http://localhost:3000/items.json").then((response) => {
      console.log(response.data);
      setItems(response.data);
    });
  };
  return (
    <div>
      <ItemsIndex items={items} />
    </div>
  );
}
