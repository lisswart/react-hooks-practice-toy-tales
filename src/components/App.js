import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/toys")
      .then(r => r.json())
      .then(setToys);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(toyToDelete) {
    const updatedToysArray = toys.filter((toy) => toy.id !== toyToDelete.id);
    setToys(updatedToysArray);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToysArray = toys.map((toy) => 
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToysArray);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddNewToy={handleAddNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys} 
        onDeleteToy={handleDeleteToy} 
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;