const router = require("express").Router();
const fs = require("fs");
const uuid = require("uuid");

// it would look like- /api/notes

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    const allNotes = JSON.parse(data);
    console.log (allNotes);

    res.json(allNotes);
    });
});

router.post("/notes", (req, res) => {
    console.log(req.body);

    fs.readFile("./db/db.json", "utf8", (err, data) =>{
        if (err) throw err;
        const allNotes = JSON.parse(data);
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid.v1()
        };

        allNotes.push(
            newNote
        );
        console.log(allNotes);
    
        fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) =>{
            if (err) res.json ({ err: "problem adding"});
            res.json({msg:"successfully added"});
        });
    });
});

router.delete("/notes/:id", (req, res) => {
    console.log(req.body);

    fs.readFile("./db/db.json", "utf8", (err, data) =>{
        if (err) throw err;
        const allNotes = JSON.parse(data);
        const delNote = req.params.id;

        const result = allNotes.filter(note => note.id != delNote);
            
        console.log(allNotes);
        console.log(result);
    
        fs.writeFile("./db/db.json", JSON.stringify(result), (err) =>{
            if (err) res.json ({ err: "problem deleting"});
            res.json(result);
            res.json({msg:"successfully deleted"});
        });
    });
});

module.exports = router;