const db = require("../models/index");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models/index");
const Pets = db.Pets;
const query = `select p.id, p.name, p.price , p.img_url , p.description , p.status , p.quantity_stock , p.cate_id , c.name as cate_name from "Pets" as p inner join "Categories" as c on c.id = p.cate_id `;
const { Op } = require("sequelize");
const showAllPetsWithCate = async () => {
  let petList = [];

  petList = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  // console.log(petList);
  return petList;
};

const getPetWithPage = async (limit, skip) => {
  let pet = [];
  pet = await Pets.findAll({ offset: skip, limit: limit });
  console.log(pet);
  return pet;
};

const getPetById = async (id) => {
  const petByID = await sequelize.query(query + `where p.id = ? `, {
    type: QueryTypes.SELECT,
    replacements: [id],
  });
  return petByID;
};

const deletePet = async (id) => {
  return (await Pets.destroy({ where: { id: id } }))?.dataValues;
};

const createPet = async (data) => {
  return await Pets.create({
    name: data.name,
    price: data.price,
    img_url: data.img_url,
    description: data.description,
    status: data.status,
    cate_id: data.cate_id,
  });
};

const updatePet = async (newObj, where) => {
  await Pets.update(newObj, {
    where: where,
  });
};

const searchByName = async (name) => {
  let petListFound = [];

  petListFound = await Pets.findAll({
    where: { name: { [Op.iLike]: "%" + name + "%" } },
  });

  return petListFound;
};

module.exports = {
  showAllPetsWithCate,
  getPetById,
  deletePet,
  createPet,
  updatePet,
  searchByName,
  getPetWithPage,
};
