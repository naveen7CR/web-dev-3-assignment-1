const fs = require("fs");

const fileName = "data.txt";

console.log("Starting File Manager...");

// CREATE
fs.writeFile(fileName, "Hello! This is my first file.", (err) => {

    if (err) {
        console.log("Error creating file:", err);
        return;
    }

    console.log("1. File created successfully.");

    // READ
    fs.readFile(fileName, "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }

        console.log("2. File read successfully.");
        console.log("File content:", data);

        // UPDATE
        fs.appendFile(
            fileName,
            "\nThis is the updated content.",
            (err) => {

                if (err) {
                    console.log("Error updating file:", err);
                    return;
                }

                console.log("3. File updated successfully.");

                // DELETE
                fs.unlink(fileName, (err) => {

                    if (err) {
                        console.log("Error deleting file:", err);
                        return;
                    }

                    console.log("4. File deleted successfully.");
                    console.log("File Manager completed.");
                });
            }
        );
    });
});