import notes from "../models/notes.js";

export const createNote = async (req, res) => {
    const { title, description } = req.body;
    try {
      const newNote = await notes.create({
        title,
        description,
      });
      res.status(201).json({
        success: true, message : "Note created successfully",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const getNotes = async (req, res) => {
    try {
      const notess = await notes.find();
      res.status(200).json(notess);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const deleteNote = async (req, res) => {
    const { id } = req.params;
    try {
      const note = await notes.findByIdAndDelete(id);
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const getNotesbyid = async (req, res) => {
    const { id } = req.params;
    try {
      const note = await notes.findById(id);
      if (!note) {
        return res.status(404).json({ message: "Note not found" });
      }
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
