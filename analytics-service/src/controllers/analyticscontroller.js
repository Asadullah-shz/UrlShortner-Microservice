const express = require("express")
const { createClickRecord } = require("../services/click.record.service");

async function RecordClick(req, res) {
    try {
        
        const { shortCode, urlId, userID } = req.body;

        
        const newClick = await createClickRecord({ shortCode, urlId, userID });
        
      
        return res.status(201).json({ 
            success: true, 
            message: "Click recorded successfully", 
            data: newClick 
        });

    } catch (error) {
        console.error("Error recording click:", error);
        
 
        if (error.message.includes("Missing required fields")) {
            return res.status(400).json({ 
                success: false, 
                message: error.message 
            });
        }


        return res.status(500).json({ 
            success: false, 
            message: "Internal Server Error" 
        });
    }
}

module.exports = { RecordClick }