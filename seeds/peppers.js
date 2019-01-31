
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('peppers').del()
    .then(function () {
      // Inserts seed entries
      return knex('peppers').insert([
        {
          Name: "Bell",
          Origin: "Hungary",
          Capsaicin: false,
          Hotness: "sweet corn",
          Rating: 0,
          Image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Poivrons_Luc_Viatour.jpg/800px-Poivrons_Luc_Viatour.jpg"
        },
        {
          Name: "Serrano",
          Origin: "Mexico",
          Hotness: "J-Lo",
          Capsaicin: true,
          Rating: 4,
          Image:
            "https://upload.wikimedia.org/wikipedia/commons/4/4c/Starr_070730-7846_Capsicum_annuum.jpg"
        },
        {
          Name: "Jalapeno",
          Origin: "Mexico",
          Hotness: "campfire",
          Capsaicin: true,
          Rating: 3,
          Image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg"
        },

      ]);
    });
};
