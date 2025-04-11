const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

/**
 * @swagger
 * components:
 *   schemas:
 *     UserProfile:
 *       type: object
 *       required:
 *         - fullName
 *         - email
 *         - password
 *         - gender
 *         - dateOfBirth
 *       properties:
 *         fullName:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         gender:
 *           type: string
 *           enum: [Male, Female, Other]
 *         dateOfBirth:
 *           type: string
 *           format: date
 *     ContactInfo:
 *       type: object
 *       required:
 *         - phoneNumber
 *         - addressLine1
 *         - city
 *         - postalCode
 *         - country
 *       properties:
 *         phoneNumber:
 *           type: string
 *         alternatePhoneNumber:
 *           type: string
 *         addressLine1:
 *           type: string
 *         addressLine2:
 *           type: string
 *         city:
 *           type: string
 *         postalCode:
 *           type: string
 *         country:
 *           type: string
 *     EmploymentInfo:
 *       type: object
 *       required:
 *         - currentJobTitle
 *         - employmentStatus
 *         - yearsOfExperience
 *       properties:
 *         currentJobTitle:
 *           type: string
 *         employmentStatus:
 *           type: string
 *           enum: [Employed, Unemployed, Student]
 *         companyName:
 *           type: string
 *         yearsOfExperience:
 *           type: number
 *         resumePath:
 *           type: string
 *     FinancialInfo:
 *       type: object
 *       required:
 *         - monthlyIncome
 *         - loanStatus
 *         - creditScore
 *       properties:
 *         monthlyIncome:
 *           type: number
 *         loanStatus:
 *           type: string
 *           enum: [Yes, No]
 *         loanAmount:
 *           type: number
 *         creditScore:
 *           type: number
 *     Preferences:
 *       type: object
 *       required:
 *         - preferredContactMode
 *       properties:
 *         preferredContactMode:
 *           type: string
 *           enum: [Email, Phone, SMS]
 *         hobbiesAndInterests:
 *           type: array
 *           items:
 *             type: string
 *         newsletterSubscription:
 *           type: boolean
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user with resume and multi-part form
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - resume
 *               - userProfile
 *               - contactInfo
 *               - employmentInfo
 *               - financialInfo
 *               - preferences
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *               userProfile:
 *                 type: string
 *                 description: JSON string (UserProfile)
 *               contactInfo:
 *                 type: string
 *                 description: JSON string (ContactInfo)
 *               employmentInfo:
 *                 type: string
 *                 description: JSON string (EmploymentInfo)
 *               financialInfo:
 *                 type: string
 *                 description: JSON string (FinancialInfo)
 *               preferences:
 *                 type: string
 *                 description: JSON string (Preferences)
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post('/', upload.single('resume'), createUser);

/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Retrieve all users
 *     responses:
 *       200:
 *         description: List of all users
 */
router.get('/', getAllUsers);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Update existing user with optional resume
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *                 description: Updated resume (PDF)
 *               userProfile:
 *                 type: string
 *                 description: JSON string (UserProfile)
 *                 example: '{"fullName":"Updated Name"}'
 *               contactInfo:
 *                 type: string
 *                 description: JSON string (ContactInfo)
 *               employmentInfo:
 *                 type: string
 *                 description: JSON string (EmploymentInfo)
 *               financialInfo:
 *                 type: string
 *                 description: JSON string (FinancialInfo)
 *               preferences:
 *                 type: string
 *                 description: JSON string (Preferences)
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put('/:id', upload.single('resume'), updateUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete('/:id', deleteUser);

module.exports = router;
