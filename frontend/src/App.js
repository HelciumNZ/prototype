// src/App.js
import React, { useState, useEffect } from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import ItemController from "./controllers/itemController";
import ItemModel from "./models/itemModel";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(new ItemModel());
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    ItemController.fetchItems(setItems);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ItemController.saveItem(
      form, 
      editingId, 
      () => ItemController.fetchItems(setItems), 
      setEditingId, 
      () => setForm(new ItemModel())
    );
  };

  const handleEdit = (item) => {
    setForm(new ItemModel(
      item.name, 
      item.description, 
      item.price));
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    await ItemController.deleteItem(
      id, () => ItemController.fetchItems(setItems));
  };

  return (
    <div>
      <h1>CRUD with React + Node.js + MongoDB</h1>
      <ItemForm 
        form={form} 
        setForm={setForm} 
        editingId={editingId} 
        handleSubmit={handleSubmit} />
      <ItemList 
        items={items} 
        handleEdit={handleEdit} 
        handleDelete={handleDelete} />
    </div>
  );
}

export default App;
