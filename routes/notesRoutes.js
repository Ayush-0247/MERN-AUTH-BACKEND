

import express from "express";
import { createNote, getNotes, deleteNote , getNotesbyid , updatenotebyid} from "../controllers/notesController.js";

const router = express.Router();

router.post("/createnote", createNote);
router.get("/getnotes", getNotes);
router.get("/getnotesbyid/:id", getNotesbyid);
router.delete("/deletenote/:id", deleteNote);
router.put("/updatenotebyid/:id", updatenotebyid);
export default router;