const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { create } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [
        { model: Product}
      ]
    });
    res.status(200).json(allTags);
  }
  catch (err) {
    res.status(400).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const byID = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product}
      ]
    });
    res.status(200).json(byID);
  }
  catch (err) {
    res.status(400).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const createTag = await Tag.create(req.body);
    res.status(200).json(createTag);
  }
  catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(updateTag);
  }
  catch (err) {
    res.status(400).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(deleteTag);
  }
  catch (err) {
    res.status(400).json(err);
  }
  // delete on tag by its `id` value
});

module.exports = router;
