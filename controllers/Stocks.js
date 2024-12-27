const db = require("../config/db");

const getStocks = (req, res) => {
    db.query("SELECT * FROM Stocks", (error, results) => {
        if (error) {
            console.log("Error selecting Stocks:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json(results);
    });
};


const addNewStocks = (req, res) => {
    const {name} = req.body;
    db.query(
        `INSERT INTO Stocks
        (name)
        VALUES (?)`,
        [name],
        (error, results) => {
            if (error) {
                console.log("Error adding new Stocks:", error);
                return res.status(500).json({
                    message: "Error adding Stocks",
                    error: "Internal Servar Error",
                });
            }
            console.log(results);
            res.status(201).json({
                message: "New Stocks added",
                StocksID: results.insertId,
            });
        }
    );
};


const getStocksByID = (req, res) => {
    const StocksId = req.params.id;
    console.log(StocksId);
    db.query("SELECT * FROM Stocks where id=?", [StocksId], (error, results) => {
        if (error) {
            console.log("Error selecting Stocks by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        if (results.lenghth ==0) {
            return res.status(404).json({message: "Stocks not found"});
        }
        res.json(results[0]);
    });
};


const updataStocksByID = (req, res) => {
    const StocksId = req.params.id;
    const {name} = req.body;
    db.query(
        `UPDATE flowers set name?, WHERE id=?`, [name],
        (error, results) => {
        if (error) {
            console.log("Error updating Stocks:", error);
            return res.status(500).json({
                message: "Error updating new Stocks",
                error: "Internal Server Error",
            });
        }
        console.log(results);
        res.json({
            message: "Stocks update successfully",
            StocksID: StocksId,
        });
      }
    );
};


const deleteStocksByID = (req, res) => {
    const StocksId = req.params.id;
    db.query("DELETE FROM Stocks where id=?", [StocksId], (error, results) => {
        if (error) {
            console.log("Error selecting Stocks by ID:", error);
            return res.status(500).json({
                error: "Internal Server Error",
            });
        }
        res.json({
            message: "Stocks deleted successfuly",
        });
    });
};

module.exports = {
    getStocks,
    addNewStocks,
    getStocksByID,
    updataStocksByID,
    deleteStocksByID
}