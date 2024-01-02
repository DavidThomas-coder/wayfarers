/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("characters", (table) => {
        table.bigIncrements("id")
        table.string("name")
        table.string("class")
        table.integer("level")
        table.integer("experience")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}
