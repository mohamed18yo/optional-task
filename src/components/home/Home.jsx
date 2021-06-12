import axios from "axios";

import { useEffect, useState } from "react";
import Card from "../card/card";
import Header from "../header/header";

import "./style.css";

function Home() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setList(res.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(list);
  return (
    <div>
      <Header
        value={value}
        onSearch={(event) => {
          setValue(event.target.value);
          const filterdList = list.filter((items) => items.title === value);
          setList(filterdList);
        }}
      ></Header>
      <section className="container">
        <h1>Your Space To WatchThe Best Pictures</h1>
        <div className="col">
          {list?.length ? (
            list.map((item) => (
              <Card src={item.url} key={item.id} title={item.title} />
            ))
          ) : (
            <span>Loading .... </span>
          )}
        </div>
      </section>
    </div>
  );
}
export default Home;
