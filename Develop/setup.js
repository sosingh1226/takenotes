const fs = require("fs");

const noteStore = []

fs.writeFile("./../db/db.json", JSON.stringify(noteStore), (err) => {
    if (err) throw err;
    console.log("Finished");
});