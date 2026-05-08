import ANavbar from "./anavbar";
import "./admin.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import axios from "axios";

function Admin() {

  const { user } = useAuth();

  const [file, setFile] = useState(null);
  const [uploadfile , setupload] = useState("");

  const stats = [
    { id: 1, label: "Total Products", value: "128" },
    { id: 2, label: "Orders", value: "42" },
    { id: 3, label: "Sales", value: "$8.4k" },
    { id: 4, label: "Returns", value: "3" },
  ];

  // handle file selection
  const handleFileChange = (e) => {

    setFile(e.target.files[0]);

  };

  // upload image
  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();

    formData.append("image", file);

    try {

      const response = await axios.post(
        "http://localhost:4000/api/v1/product/upload",
        formData
      );

      console.log(response.data);

      alert("Upload successful");

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="admin-panel">

      <ANavbar />

      <div className="admin">

        <section className="admin-hero">

          <div>
            <p className="admin-eyebrow">Admin Panel</p>

            <h1>
              Welcome back, {user?.name || "Seller"}
            </h1>

            <p className="admin-subtitle">
              Here is a quick view of your store performance today.
            </p>
          </div>

          <input
            type="file"
            id = "fileUpload"
            hidden
            onChange={handleFileChange}
          />
          <label htmlFor="fileUpload" className="upload-btn">
            Choose File
          </label>
          <button
            type="button"
            className="admin-action"
            onClick={handleUpload}
          >
            Add Product
          </button>
        </section>

      </div>

    </div>
  );
}

export default Admin;