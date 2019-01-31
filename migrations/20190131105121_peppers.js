
exports.up = function (knex, Promise) {
    return knex.schema.createTable("peppers", pepper => {
        pepper.increments("Id");
        pepper.text("Name");
        pepper.text("Origin");
        pepper.boolean("Capsaicin").notNullable().defaultTo(true)
        pepper.text("Hotness")
        pepper.integer("Rating")
        pepper.text("Image")
    });

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("peppers")
};
