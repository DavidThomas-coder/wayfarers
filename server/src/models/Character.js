const Model = require("./Model")

class Character extends Model {
    static get tableName() {
        return "characters"
    }
    
    static get jsonSchema() {
        return {
            type: "object",
            required: []
        }
    }
}