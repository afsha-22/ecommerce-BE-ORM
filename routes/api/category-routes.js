const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories, included Products association
router.get('/', async (req, res) => {
  try {
    const allCategory = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(allCategory);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// find one category by its `id` value, included Products association
router.get('/:id', async (req, res) => {
  try {
    const byID = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    res.status(200).json(byID);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// create a new category
router.post('/', async (req, res) => {
  try {
    const addCategory = await Category.create(req.body);
    res.status(200).json(addCategory);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(updateCategory);
  }
  catch (err) {
    res.status(400).json(err);
  }
}
);

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleteID = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(204).json(deleteID);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
