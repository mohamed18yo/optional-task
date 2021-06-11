import axios from "axios";

import { useEffect, useState } from "react";
import Card from "../card/card";

import "./style.css";

function Home() {
  const [list, setList] = useState([]);
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setList(res.data.splice(0, 12));
      console.log(res.data.splice(0, 12));
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="container">   
      <h1>Your Space To WatchThe Best Pictures</h1>
      <div className="col">
        {list?.length ? (
          list.map((item) => {
            <Card src={item.url} title={item.title}></Card>
          })
        ) : (
          <span>Loading .... </span>
        )}
      </div>
    </section>
  );
}
export default Home;
