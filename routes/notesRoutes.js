

import express from "express";
import { createNote, getNotes, deleteNote , getNotesbyid} from "../controllers/notesController.js";

const router = express.Router();

router.post("/createnote", createNote);
router.get("/getnotes", getNotes);
router.delete("/deletenote/:id", deleteNote);
router.get("/getnotesbyid/:id", getNotesbyid);

export default router;