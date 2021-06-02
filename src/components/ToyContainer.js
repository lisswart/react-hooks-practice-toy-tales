
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onUpdateToy }) {
  const listOfToys = toys.map((toy) => {
    return (
      <ToyCard 
        key={toy.id} 
        toy={toy} 
        onDeleteToy={onDeleteToy} 
        onUpdateToy={onUpdateToy}
      />
    );
  });
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */}
      {listOfToys}
    </div>
  );
}

export default ToyContainer;