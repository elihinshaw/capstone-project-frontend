export function ItemsIndex(props) {
  return (
    <div id="items-index">
      <h1>All Movies</h1>
      <br></br>
      {props.items.map((item) => (
        <div key={item.id}>
          <details>
            <summary>{item.name} </summary>
            <img src={item.image_url} />
            <p>{item.description}</p>
            <p>{item.category}</p>
          </details>
          <br></br>
        </div>
      ))}
    </div>
  );
}
