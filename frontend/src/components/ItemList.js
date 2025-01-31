// src/components/ItemList.js
import React from "react";

const ItemList = ({ items, handleEdit, handleDelete }) => {
  return (
    <ul>
        {items.map((item) => (
            <li key={item._id}>
                {item.name} - {item.description} - R${item.price}
                <button onClick={() => handleEdit(item)}>
                    Editar
                </button>
                <button onClick={() => handleDelete(item._id)}>
                    Excluir
                </button>
            </li>
        ))}
    </ul>
  );
};

export default ItemList;
