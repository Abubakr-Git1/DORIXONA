const db = require("../config/db");

const getMedicines = (req, res) => {
    db.query("SELECT * FROM Medicines", (error, results) => {
        if (error) {
            console.log("Error selecting Medicines:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json(results);
    });
};


const addNewMedicines = (req, res) => {
    const {name} = req.body;
    db.query(
        `INSERT INTO Medicines
        (name)
        VALUES (?)`,
        [name],
        (error, results) => {
            if (error) {
                console.log("Error adding new Medicines:", error);
                return res.status(500).json({
                    message: "Error adding Medicines",
                    error: "Internal Servar Error",
                });
            }
            console.log(results);
            res.status(201).json({
                message: "New Medicines added",
                MedicinesID: results.insertId,
            });
        }
    );
};


const getMedicinesByID = (req, res) => {
    const MedicinesId = req.params.id;
    console.log(MedicinesId);
    db.query("SELECT * FROM Medicines where id=?", [MedicinesId], (error, results) => {
        if (error) {
            console.log("Error selecting Medicines by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        if (results.lenghth ==0) {
            return res.status(404).json({message: "Medicines not found"});
        }
        res.json(results[0]);
    });
};


const updataMedicinesByID = (req, res) => {
    const MedicinesId = req.params.id;
    const {name} = req.body;
    db.query(
        `UPDATE flowers set name?, WHERE id=?`, [name],
        (error, results) => {
        if (error) {
            console.log("Error updating Medicines:", error);
            return res.status(500).json({
                message: "Error updating new Medicines",
                error: "Internal Server Error",
            });
        }
        console.log(results);
        res.json({
            message: "Medicines update successfully",
            MedicinesID: MedicinesId,
        });
      }
    );
};


const deleteMedicinesByID = (req, res) => {
    const MedicinesId = req.params.id;
    db.query("DELETE FROM Medicines where id=?", [MedicinesId], (error, results) => {
        if (error) {
            console.log("Error selecting Medicines by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json({
            message: "Medicines deleted successfuly",
        });
    });
};



module.exports = {
    getMedicines,
    addNewMedicines,
    getMedicinesByID,
    updataMedicinesByID,
    deleteMedicinesByID
}