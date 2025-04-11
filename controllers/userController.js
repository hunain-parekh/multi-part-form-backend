const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const {
      userProfile,
      contactInfo,
      employmentInfo,
      financialInfo,
      preferences,
    } = req.body;

    const parsedEmploymentInfo = JSON.parse(employmentInfo);
    if (req.file) {
      parsedEmploymentInfo.resumePath = req.file.path;
    }

    const newUser = new User({
      userProfile: JSON.parse(userProfile),
      contactInfo: JSON.parse(contactInfo),
      employmentInfo: parsedEmploymentInfo,
      financialInfo: JSON.parse(financialInfo),
      preferences: JSON.parse(preferences),
    });

    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const fieldsToUpdate = [
      "userProfile",
      "contactInfo",
      "employmentInfo",
      "financialInfo",
      "preferences",
    ];
    const updatedData = {};

    // Dynamically parse all fields
    fieldsToUpdate.forEach((field) => {
      if (req.body[field]) {
        updatedData[field] = JSON.parse(req.body[field]);
      }
    });

    // Handle resume file upload (if exists)
    if (req.file) {
      if (!updatedData.employmentInfo) {
        // In case employmentInfo wasn't in the request but resume is
        updatedData.employmentInfo = {};
      }
      updatedData.employmentInfo.resumePath = req.file.path;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Update Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
