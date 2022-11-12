const db = require("../models/index");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const Pets = db.Pets;

const showAllPetsWithCate = async () => {
  let petList = [];

  const query = `select p.id, p.name, p.price , p.img_url , p.description , p.status , c.name as cate_name from "Pets" as p inner join "Categories" as c on c.id = p.cate_id `;
  petList = await sequelize.query(query, { type: QueryTypes.SELECT });
  console.log(petList);
  return petList;
};

module.exports = {
  showAllPetsWithCate,
};
