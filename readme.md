# 🧠 Multi-Part Form Backend – Express.js + MongoDB + Swagger

Welcome to the backend for a **6-step multi-part form** system. This API supports structured data submission with conditional fields, resume upload (PDF only), CRUD operations, and a fully interactive Swagger documentation interface.

---

## 🚀 Project Overview

This backend is built using:

- ⚙️ **Express.js** – Node.js web framework
- 🧠 **Mongoose** – MongoDB ODM with modular schema design
- 📂 **Multer** – File upload middleware (PDF resume)
- 📃 **Swagger UI** – Auto-generated API documentation
- ✅ Designed to integrate with any modern frontend (like **Next.js**)

---

## 📦 Key Features

- ✅ Resume upload saved inside `employmentInfo.resumePath`
- ✅ JSON string fields parsed from `FormData` request
- ✅ Modular schema: `userProfile`, `contactInfo`, `employmentInfo`, etc.
- ✅ RESTful endpoints: Create, Read, Update, Delete
- ✅ Swagger-based interactive documentation at `/api-docs`
- ✅ Professional code structure & validation logic

---

## 📂 How the Form Data Works

All fields except the resume are sent as **JSON strings** inside a `multipart/form-data` request.

### ✅ Example Frontend/Tool Request

| Key             | Type    | Value Description |
|------------------|---------|-------------------|
| `resume`         | File    | Resume PDF (required) |
| `userProfile`    | String  | JSON string of user info |
| `contactInfo`    | String  | JSON string of address info |
| `employmentInfo` | String  | JSON string (no `resumePath`, it's auto-injected) |
| `financialInfo`  | String  | JSON string |
| `preferences`    | String  | JSON string |

---

## 🧑‍💻 Example JSON Structures

#### 📘 userProfile
```json
{
  "fullName": "Ali Raza",
  "email": "ali@example.com",
  "password": "123456",
  "gender": "Male",
  "dateOfBirth": "1995-05-01"
}
```

## 🔧 Installation & Setup Guide

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd multi-part-form-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create a .env File Create a .env file and add the following configuration:**
   ```ini
   MONGODB_URI=<your-db-url>
   PORT=5000
   ```

4. **Start the Server**
   ```bash
   npm start
   ```
   The server will be running at:
   (http://localhost:5000)


## 📘 API Endpoints

| Method | Route          | Description                      |
|--------|----------------|----------------------------------|
| POST   | /api/user      | Submit full form with resume     |
| GET    | /api/user      | Fetch all submitted users        |
| PUT    | /api/user/:id  | Update user (resume optional)    |
| DELETE | /api/user/:id  | Delete a user                    |

## 📖 API Documentation (Swagger)

Interactive documentation is available at:  
👉 [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

You can:

- Upload resume directly from Swagger UI  
- Provide full JSON-form input  
- View required fields and example data  

## 🧪 Testing via Postman

If Swagger is not sufficient, you can test the API using Postman:

1. Select **POST** or **PUT** method  
2. Set `Content-Type` as `multipart/form-data`  
3. Attach the **resume** as a file  
4. Add **JSON strings** for other keys in text fields  
5. Submit the request and view the response  

> **Note:** Ensure the resume is in **PDF format only**.

## 📁 Upload Directory

All resumes are automatically saved in the `/uploads/` folder.  
The file path is stored in the `employmentInfo.resumePath` field.

You can access resumes by visiting:
`http://localhost:5000/uploads/<filename.pdf>`

## ✅ Manager/Reviewer Notes

- Swagger is added for self-explanatory testing  
- Resume handling is isolated and secured (PDF-only)  
- JSON format ensures flexibility from any modern frontend  
- Each part of the form is modular, maintainable, and extendable

## 🧑 Author & Details

- **Developer:** Hunain Parekh  
- **Assigned By:** Umair Athar – FabTechSol  
- **Development Window:** 10 April 2025 – 13 April 2025  
