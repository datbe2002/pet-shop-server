const db = require("../models/index");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const Pets = db.Pets;
const query = `select p.id, p.name, p.price , p.img_url , p.description , p.status , c.name as cate_name from "Pets" as p inner join "Categories" as c on c.id = p.cate_id `;

const showAllPetsWithCate = async () => {
  let petList = [];

  petList = await sequelize.query(query, { type: QueryTypes.SELECT });
  console.log(petList);
  return petList;
};

const getPetById = async (id) => {
  console.log(id);
  const petByID = await sequelize.query(query + `where p.id = ? `, {
    type: QueryTypes.SELECT,
    replacements: [id],
  });
  console.log(petByID);
  return petByID;
};

module.exports = {
  showAllPetsWithCate,
  getPetById,
};
