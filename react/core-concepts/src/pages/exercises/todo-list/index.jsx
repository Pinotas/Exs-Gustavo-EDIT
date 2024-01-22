import { useState } from "react";

function TodoListPage() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(["Primeiro elemento"]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página no envio do formulário
    if (inputValue.trim() !== "") {
      // Verifica se o valor não está vazio ou contém apenas espaços em branco
      setItems([...items, inputValue]);
      setInputValue(""); // Limpa o valor do campo de entrada após adicionar à lista
    }
  };

  const handleRemove = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li onClick={() => handleRemove(index)} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListPage;
