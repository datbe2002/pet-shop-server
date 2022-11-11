const db = require("../models/index");

const Categories = db.Categories;

const showAllCate = async () => {
  let cateList = [];
  cateList = await Categories.findAll({
    raw: true,
  });
  return cateList;
};

const createCate = async (data) => {
  //   console.log(data);
  return await Categories.create({
    name: data.name,
  });
};

const getCategoryByName = async (name) => {
  return (
    await Categories.findOne({
      where: {
        name: name,
      },
    })
  )?.dataValues;
};
const getCategoryByID = async (id) => {
  return (
    await Categories.findOne({
      where: {
        id: id,
      },
    })
  )?.dataValues;
};

const updateCate = async (newObj, where) => {
  //   console.log(where);
  await Categories.update(newObj, {
    where: where,
  });
};

const deleteCateById = async (id) => {
  return (await Categories.destroy({ where: { id: id } }))?.dataValues;
};

module.exports = {
  showAllCate,
  createCate,
  getCategoryByName,
  getCategoryByID,
  updateCate,
  deleteCateById,
};
