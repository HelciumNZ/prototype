// src/controllers/itemController.js
import axios from "axios";

const API_URL = "http://localhost:8080/items";

class ItemController {
  async fetchItems(setItems) {
    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }

  async saveItem(item, editingId, fetchItems, setEditingId, resetForm) {
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, item);
      } else {
        await axios.post(API_URL, item);
      }
      resetForm();
      setEditingId(null);
      fetchItems();
    } catch (error) {
      console.error("Error saving item:", error);
    }
  }

  async deleteItem(id, fetchItems) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }
}

const itemController = new ItemController();
export default itemController;
