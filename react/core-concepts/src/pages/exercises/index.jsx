import "./styles.css";
import { useState } from "react";

const cardsList = [
  {
    id: 1,
    title: "Card 1",
    description: "Card 1 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Card 2",
    description: "Card 2 description",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Card 3",
    description: "Card 3 description",
    image: "https://picsum.photos/200/300",
  },
];

function CardsComponents(props) {
  return (
    <div className="exercises-card">
      <h2>{props.id}</h2>
      <p>Title: {props.title}</p>
      <p>Description: {props.description}</p>
      <img src={props.img} alt="" />
    </div>
  );
}

export default function ExercisesPage() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAssunto, setInputAssunto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${inputName}\nEmail: ${inputEmail}\nAssunto: ${inputAssunto}`);
    setInputName("");
    setInputEmail("");
    setInputAssunto("");
  };

  return (
    <div>
      <h1>Cards</h1>
      <div className="exercises-card-list">
        {cardsList.map((item, index) => (
          <CardsComponents
            key={`${index}-${item.title}`}
            title={item.title}
            description={item.description}
            img={item.image}
          />
        ))}
      </div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Assunto:</label>
          <input
            type="text"
            value={inputAssunto}
            onChange={(e) => setInputAssunto(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
