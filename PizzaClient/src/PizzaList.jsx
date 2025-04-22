import { useState } from "react";

function PizzaList({ name, data, onCreate, onUpdate, onDelete, error }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingId) {
      onUpdate(formData);
      setEditingId(null);
    } else {
      onCreate(formData);
    }
    setFormData({
      id: "",
      name: "",
      description: "",
    });
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      id: item.id,
      name: item.name,
      description: item.description,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      id: "",
      name: "",
      description: "",
    });
  };

  return (
    <div>
      <h2>New {name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleFormChange}
          placeholder="Description"
        />
        <button type="submit">{editingId ? "Update" : "Create"}</button>
        {editingId && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel
          </button>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <h2>{name}s</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div>
              <strong>{item.name}</strong>: {item.description}
            </div>
            <div>
              <button onClick={() => handleEdit(item)}>Edit</button>
            </div>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaList;
