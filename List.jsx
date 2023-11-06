function List({ dataset, property }) {
  return (
    <ul>
      {" "}
      {dataset.map((thisitem) => (
        <li key={thisitem.id}>{thisitem[property]}</li>
      ))}
    </ul>
  );
}

export default List;
