const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
    fs.readFile("../db/db.json", "utf8", (err, data) => {
    if (err) throw err;

    const allNotes = JSON.parse(data);
    console.log (allNotes);
    });
});

router.post("/api/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("../db/db.json", "utf8", (err, data) =>{
        if (err) throw err;
        const allNotes = JSON.parse(data);
        
        allNotes.push({
            title: req.body.title,
            text: req.body.text
        });
        console.log(allNotes);
    
        fs.writeFile("../db/db.json", JSON.stringify(allNotes), (err) =>{
            if (err) return res.JSON ({ err: "problem adding"});
            return res.json({msg:"successfully added"});
        });
    });
});




module.exports = router;