const httpStatus = require("http-status");
const { ApiError } = require("../middleware/apiError");

const categoryRepository = require("../repository/categoryRepository");

const getAllCategories = async () => {
  const allCategories = await categoryRepository.showAllCate();
  if (allCategories.length == 0) {
    throw new ApiError(httpStatus.NOT_FOUND, "No category found");
  }
  return allCategories;
};

const createNewCategory = async (req, res) => {
  const data = req.body;
  const existedName = await categoryRepository.getCategoryByName(data.name);
  // console.log(existedName.name);
  if (data.name === existedName.name) {
    throw new ApiError(httpStatus.FORBIDDEN, "This category already exists");
  }
  // console.log(data);
  const creatNewCate = await categoryRepository.createCate(data);
  return creatNewCate;
};

const updateCategory = async (req, res) => {
  try {
    const data = req.body;
    if (!data.id) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Missing id");
    }
    const cate = await categoryRepository.getCategoryByID(data.id);

    if (!cate) {
      throw new ApiError(httpStatus.NOT_FOUND, "Can not find that category");
    } else {
      await categoryRepository.updateCate(data, { id: data.id });
    }
  } catch (error) {
    throw error;
  }
};

const deleteCateById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Missing id");
    }
    const existedCategory = await categoryRepository.getCategoryByID(id);

    if (!existedCategory) {
      throw new ApiError(httpStatus.NOT_FOUND, "Can not find that category");
    } else {
      await categoryRepository.deleteCateById(id);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategories,
  createNewCategory,
  updateCategory,
  deleteCateById,
};
