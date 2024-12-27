const db = require("../config/db");

const getMedicines_type = (req, res) => {
    db.query("SELECT * FROM Medicines_type", (error, results) => {
        if (error) {
            console.log("Error selecting Medicines_type:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json(results);
    });
};


const addNewMedicines_type = (req, res) => {
    const {name} = req.body;
    db.query(
        `INSERT INTO Medicines_type
        (name)
        VALUES (?)`,
        [name],
        (error, results) => {
            if (error) {
                console.log("Error adding new Medicines_type:", error);
                return res.status(500).json({
                    message: "Error adding Medicines_type",
                    error: "Internal Servar Error",
                });
            }
            console.log(results);
            res.status(201).json({
                message: "New Medicines_type added",
                Medicines_typeID: results.insertId,
            });
        }
    );
};


const getMedicines_typeByID = (req, res) => {
    const Medicines_typeId = req.params.id;
    console.log(Medicines_typeId);
    db.query("SELECT * FROM Medicines_type where id=?", [Medicines_typeId], (error, results) => {
        if (error) {
            console.log("Error selecting Medicines_type by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        if (results.lenghth ==0) {
            return res.status(404).json({message: "Medicines_type not found"});
        }
        res.json(results[0]);
    });
};


const updataMedicines_typeByID = (req, res) => {
    const Medicines_typeId = req.params.id;
    const {name} = req.body;
    db.query(
        `UPDATE flowers set name?, WHERE id=?`, [name],
        (error, results) => {
        if (error) {
            console.log("Error updating Medicines_type:", error);
            return res.status(500).json({
                message: "Error updating new Medicines_type",
                error: "Internal Server Error",
            });
        }
        console.log(results);
        res.json({
            message: "Medicines_type update successfully",
            Medicines_typeID: Medicines_typeId,
        });
      }
    );
};


const deleteMedicines_typeByID = (req, res) => {
    const Medicines_typeId = req.params.id;
    db.query("DELETE FROM Medicines_type where id=?", [Medicines_typeId], (error, results) => {
        if (error) {
            console.log("Error selecting Medicines_type by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json({
            message: "Medicines_type deleted successfuly",
        });
    });
};


module.exports = {
    getMedicines_type,
    addNewMedicines_type,
    getMedicines_typeByID,
    updataMedicines_typeByID,
    deleteMedicines_typeByID
}