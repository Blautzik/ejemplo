import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, category, stock, team, img }) => {
  const handleOnAdd = (quantity) => {
    alert(`Se agregaron ${quantity} ${name}`);
  };

  return (
    <div>
      <h1>{name}</h1>
      <h2>{category}</h2>
      <h2>{team}</h2>
      <img src={img} alt="" />
      <ItemCount stock={stock} onAdd={handleOnAdd} />
    </div>
  
  );
};

export default ItemDetail;
