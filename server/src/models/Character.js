const Model = require("./Model")

class Character extends Model {
    static get tableName() {
        return "characters"
    }
}