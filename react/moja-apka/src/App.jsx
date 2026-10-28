import {useState, useEffect} from "react";

function Welcome(){
  const name = "meow";
  return <h1>Hello, {name}</h1>;
}
function ReadCard({name, surname}){
  return (
    <div>{name} -{surname}
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Klkiknięcia: {count}</p>
      <button onClick={() => setCount(count + 1)}>Klkinij mnie</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
function Greeting(){
  const [name, setName] = useState("");
  function handleChange(event){
    setName(event.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleChange}/>
      <p>Hello, {name}</p>
    </div>
  );
}

const list = [{id:1, imie:"meooow", nazwisko:"kat"}, {id:2, imie:"meow", nazwisko:"cat"}];
function ListNames(){
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>{item.imie} - {item.nazwisko}</li>
      ))}
    </ul>
  );
}
function Status(isOnline){
if (isOnline){
  return <p>Online</p>;
}else {
  return <p>Offline</p>;
}
} 

function Badge({count}){
  return (
    <div>
    {count > 0 ? <span>Liczb powiadomień:{count}</span> : <span>Brak Powiadomień</span>}
    {count > 0 && <span>Liczb powiadomień:{count}</span>}
    </div>
  );
}

function DocumentTitle(){
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Kliknięcia: ${count}`;
  }, [count]);
  return (
    <div>
      <p>Kliknięcia: {count}</p>
      <button onClick={() => setCount(count + 1)}>Kliknij mnie</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
  


export default function App(){
  return (
    <div>
      <Counter />
      <Welcome />
      <ReadCard name ="Meow" surname="Cat"/>
      <Greeting />
      <ListNames />
      <Status/>
      <Badge count={5}/>
      <DocumentTitle />
    </div>
  );
}