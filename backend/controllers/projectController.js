import asyncHandler from 'express-async-handler'
import Project from '../models/projectModel.js'
import { projectCreateSchema, projectUpdateSchema, reviewUpdateSchema } from '../validation/projectValidation.js';

//@desc fetch all the products
//@route GET /api/products
//@access public

const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({})
  res.json(projects)
})

//@desc fetch single products
//@route GET /api/products/:id
//@access public

const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)

  if (project) {
    res.json(project)
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

//@desc fetch single products
//@route GET /api/products/:id
//@access public

const getProjectByUser = asyncHandler(async (req, res) => {
  const project = await Project.find({ user: req.params.id })

  if (project) {
    res.json(project)
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProject = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.deleteProduct();
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Create a product
// @route POST /api/products/
// @access Private/Admin
const createProject = asyncHandler(async (req, res) => {
  const payload = await projectCreateSchema.validateAsync(req.body);
  if (!payload.error) {
    const { name, price, user, image, brand, category, countInStock, numReviews, description, title, techStack } = payload
    const project = new Project({
      name,
      price,
      user,
      image,
      brand,
      category,
      countInStock,
      numReviews,
      description,
      title,
      techStack
    });
    const createdProject = await project.save();
    res.status(201).json(createdProject);
  }
});

// @desc Update a product
// @route PUT /api/products/
// @access Private/Admin
const updateProject = asyncHandler(async (req, res) => {
  const payload = await projectUpdateSchema.validateAsync(req.body);
  if (!payload.error) {
    const { name, price, description, image, brand, category, countInStock } = payload;
    const project = await Product.findById(req.params.id);
    if (project) {
      project.name = name;
      project.price = price;
      project.description = description;
      project.image = image;
      project.category = category;
      project.brand = brand;
      project.countInStock = countInStock;

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  }
});

// @desc Create new review
// @route POST /api/products/:id/reviews
// @access Private

const createProjectReview = asyncHandler(async (req, res) => {
  const payload = await reviewUpdateSchema.validateAsync(req.body);
  if (!payload.error) {
    const { rating, comment } = payload;
    const project = await Project.findById(req.params.id);
    if (project) {
      const alreadyReviewed = project.reviews.find(r => r.user.toString() === req.user._id.toString())
      if (alreadyReviewed) {
        res.status(400)
        throw new Error("Product already reviewed")
      }
      const review = {
        name: req.user.name,
        rating: rating,
        comment,
        user: req.user._id
      }

      project.reviews.push(review)
      project.numReviews = project.reviews.length;
      project.rating = project.reviews.reduce((acc, item) => item.rating + acc, 0) / project.reviews.length;
      await project.save()
      res.status(201).json({ message: "Review added successfully" })
    } else {
      res.status(404);
      throw new Error("Project not found");
    }
  }
});

export {
  getProjectById,
  getProjects,
  getProjectByUser,
  createProject,
  createProjectReview,
  updateProject,
  deleteProject
};
