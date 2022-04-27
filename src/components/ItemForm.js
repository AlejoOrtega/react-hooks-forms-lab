import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [formData, setFormData] = useState({id:uuid(), name: '', category: 'Produce'})

  function handleFormDataChange(event){
    let name = event.target.name
    setFormData({...formData,
                [name]: event.target.value})
  }

  return (
    <form className="NewItem" onSubmit={(event)=>onItemFormSubmit(event, formData)}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormDataChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormDataChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
