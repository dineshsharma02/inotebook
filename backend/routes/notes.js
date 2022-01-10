const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//Route1 - fetching all notes:GET "api/notes/fetchallnotes". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  //returning the array of the errors
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

//Route2 - Adding new note :POST "api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchuser,
  [
    //if there are errors return bad request and the errors
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid description").isLength({ min: 2 }),
  ],
  async (req, res) => {
    //returning the array of the errors
    try {
      const { title, description, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server occured");
    }
  }
);

//Route3 - updating note :PUT "api/notes/updatenote". Login required
router.put(
    "/updatenote/:id",
    fetchuser,
    async (req, res) => {
      //returning the array of the errors
      try {
        const { title, description, tag } = req.body;
        const newNote = {};
        if(title){
            newNote.title=title;
        }
        if(description){
            newNote.description=description;
        }
        if(tag){
            newNote.tag=tag
        }
        let note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).send("Not found")
        }
        if(note.user.toString()!=req.user.id){
            return res.status(402).send("Not allowed")
        }
        note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json({note});
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server occured");
      }
    }
  );

module.exports = router;
