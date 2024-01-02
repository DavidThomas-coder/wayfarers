const Model = require("./Model")

class Character extends Model {
    static get tableName() {
        return "characters";
    }
    
    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "class"], 
            properties: {
                id: { type: "integer" },
                name: { type: "string", minLength: 1, maxLength: 255 }, // Adjust max length as needed
                class: { type: "string", minLength: 1, maxLength: 255 }, // Adjust max length as needed
                level: { type: "integer", minimum: 0 }, // Assuming level cannot be negative
                experience: { type: "integer", minimum: 0 }, // Assuming experience cannot be negative
                stepCount: { type: "integer", minimum: 0 }, // Assuming stepCount cannot be negative
                createdAt: { type: "string", format: "date-time" }, // Assuming createdAt is a timestamp
                updatedAt: { type: "string", format: "date-time" } // Assuming updatedAt is a timestamp
            }
        };
    }
}

module.exports = Character;
