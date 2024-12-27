const db = require("../config/db");

const getRegion = (req, res) => {
    db.query("SELECT * FROM Region", (error, results) => {
        if (error) {
            console.log("Error selecting region:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json(results);
    });
};


const addNewRegion = (req, res) => {
    const {name} = req.body;
    db.query(
        `INSERT INTO region
        (name)
        VALUES (?)`,
        [name],
        (error, results) => {
            if (error) {
                console.log("Error adding new Region:", error);
                return res.status(500).json({
                    message: "Error adding region",
                    error: "Internal Servar Error",
                });
            }
            console.log(results);
            res.status(201).json({
                message: "New region added",
                RegionID: results.insertId,
            });
        }
    );
};


const getRegionByID = (req, res) => {
    const regionId = req.params.id;
    console.log(regionId);
    db.query("SELECT * FROM region where id=?", [regionId], (error, results) => {
        if (error) {
            console.log("Error selecting region by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        if (results.lenghth ==0) {
            return res.status(404).json({message: "Region not found"});
        }
        res.json(results[0]);
    });
};


const updataRegionByID = (req, res) => {
    const regionId = req.params.id;
    const {name} = req.body;
    db.query(
        `UPDATE flowers set name?, WHERE id=?`, [name],
        (error, results) => {
        if (error) {
            console.log("Error updating region:", error);
            return res.status(500).json({
                message: "Error updating new region",
                error: "Internal Server Error",
            });
        }
        console.log(results);
        res.json({
            message: "region update successfully",
            RegionID: regionId,
        });
      }
    );
};


const deleteRegionByID = (req, res) => {
    const regionId = req.params.id;
    db.query("DELETE FROM region where id=?", [regionId], (error, results) => {
        if (error) {
            console.log("Error selecting region by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json({
            message: "Region deleted successfuly",
        });
    });
};


module.exports = {
    getRegion,
    addNewRegion,
    getRegionByID,
    updataRegionByID,
    deleteRegionByID
}