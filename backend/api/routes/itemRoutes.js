const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// Creat a new item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ 
        error: error.message });
  }
});

// List all the items
router.get("/", async (req, res) => {
  try {
    console.log('getting items')
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ 
        error: error.message });
  }
});

// Get an item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findById(
        req.params.id);
    if (!item) 
        return res.status(404).json({ 
            error: "Item não encontrado" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ 
        error: error.message });
  }
});

// Update an item by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
        req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem)
      return res.status(404).json({ 
        error: "Item não encontrado" });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ 
        error: error.message });
  }
});

// Delete an item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(
        req.params.id);
    if (!deletedItem)
      return res.status(404).json({ 
        error: "Item nao encontrado" });
    res.json({ 
        message: "Item removido com sucesso" });
  } catch (error) {
    res.status(500).json({ 
        error: error.message });
  }
});

module.exports = router;
