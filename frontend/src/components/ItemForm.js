// src/components/ItemForm.js
import React from "react";

const ItemForm = ({ form, setForm, editingId, handleSubmit }) => {
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={form.name} 
            onChange={handleChange} 
            required />
        <input 
            type="text" 
            name="description" 
            placeholder="Description" 
            value={form.description} 
            onChange={handleChange} />
        <input 
            type="number" 
            name="price" 
            placeholder="Price" 
            value={form.price} 
            onChange={handleChange} 
            required />
        <button type="submit">
            {editingId ? 
                "Update" 
                : "Add"}
        </button>
    </form>
  );
};

export default ItemForm;
