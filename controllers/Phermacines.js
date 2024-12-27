const db = require("../config/db");

const getPhermacines = (req, res) => {
    db.query("SELECT * FROM Phermacines", (error, results) => {
        if (error) {
            console.log("Error selecting Phermacines:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json(results);
    });
};


const addNewPhermacines = (req, res) => {
    const {name} = req.body;
    db.query(
        `INSERT INTO Phermacines
        (name)
        VALUES (?)`,
        [name],
        (error, results) => {
            if (error) {
                console.log("Error adding new Phermacines:", error);
                return res.status(500).json({
                    message: "Error adding Phermacines",
                    error: "Internal Servar Error",
                });
            }
            console.log(results);
            res.status(201).json({
                message: "New Phermacines added",
                PhermacinesID: results.insertId,
            });
        }
    );
};


const getPhermacinesByID = (req, res) => {
    const PhermacinesId = req.params.id;
    console.log(PhermacinesId);
    db.query("SELECT * FROM Phermacines where id=?", [PhermacinesId], (error, results) => {
        if (error) {
            console.log("Error selecting Phermacines by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        if (results.lenghth ==0) {
            return res.status(404).json({message: "Phermacines not found"});
        }
        res.json(results[0]);
    });
};


const updataPhermacinesByID = (req, res) => {
    const PhermacinesId = req.params.id;
    const {name} = req.body;
    db.query(
        `UPDATE flowers set name?, WHERE id=?`, [name],
        (error, results) => {
        if (error) {
            console.log("Error updating Phermacines:", error);
            return res.status(500).json({
                message: "Error updating new Phermacines",
                error: "Internal Server Error",
            });
        }
        console.log(results);
        res.json({
            message: "Phermacines update successfully",
            PhermacinesID: PhermacinesId,
        });
      }
    );
};


const deletePhermacinesByID = (req, res) => {
    const PhermacinesId = req.params.id;
    db.query("DELETE FROM Phermacines where id=?", [PhermacinesId], (error, results) => {
        if (error) {
            console.log("Error selecting Phermacines by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json({
            message: "Phermacines deleted successfuly",
        });
    });
};


module.exports = {
    getPhermacines,
    addNewPhermacines,
    getPhermacinesByID,
    updataPhermacinesByID,
    deletePhermacinesByID
}