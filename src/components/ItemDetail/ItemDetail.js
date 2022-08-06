import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, stock }) => {
  const handleOnAdd = (quantity) => {
    alert(`Se agregaron ${quantity} ${name}`)
  }

  return (
    <div>
      <h1>{name}</h1>
      <ItemCount stock={stock} onAdd={handleOnAdd}/>
    </div>
  )
}

export default ItemDetail