const db = require("../config/db");

const getDistrict = (req, res) => {
    db.query("SELECT * FROM District", (error, results) => {
        if (error) {
            console.log("Error selecting District:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json(results);
    });
};

const addNewDistrict = (req, res) => {
    const { name } = req.body;
    db.query(
        `INSERT INTO District
        (name)
        VALUES (?)`,
        [name],
        (error, results) => {
            if (error) {
                console.log("Error adding new District:", error);
                return res.status(500).json({
                    message: "Error adding District",
                    error: "Internal Server Error",
                });
            }
            console.log(results);
            res.status(201).json({
                message: "New District added",
                DistrictID: results.insertId,
            });
        }
    );
};

const getDistrictByID = (req, res) => {
    const DistrictId = req.params.id;
    console.log(DistrictId);
    db.query("SELECT * FROM District WHERE id=?", [DistrictId], (error, results) => {
        if (error) {
            console.log("Error selecting District by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: "District not found" });
        }
        res.json(results[0]);
    });
};

const updateDistrictByID = (req, res) => {
    const DistrictId = req.params.id;
    const { name } = req.body;
    db.query(
        "UPDATE District SET name=? WHERE id=?", [name, DistrictId],
        (error, results) => {
            if (error) {
                console.log("Error updating District:", error);
                return res.status(500).json({
                    message: "Error updating District",
                    error: "Internal Server Error",
                });
            }
            console.log(results);
            res.json({
                message: "District updated successfully",
                DistrictID: DistrictId,
            });
        }
    );
};

const deleteDistrictByID = (req, res) => {
    const DistrictId = req.params.id;
    db.query("DELETE FROM District WHERE id=?", [DistrictId], (error, results) => {
        if (error) {
            console.log("Error deleting District by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json({
            message: "District deleted successfully",
        });
    });
};

module.exports = {
    getDistrict,
    addNewDistrict,
    getDistrictByID,
    updateDistrictByID,
    deleteDistrictByID
}