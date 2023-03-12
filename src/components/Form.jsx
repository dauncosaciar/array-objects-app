import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState(initialState());

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      // benefits: [...formData.benefits, { _id: "400", [name]: value }]
      benefits: formData.benefits.map((benefit) => {
        return { ...benefit, _id: 400, [name]: value };
      })
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const benefitsFields = Array.from(document.getElementsByClassName("fieldBenefit"));

    let someEmpty = benefitsFields.some((field) => {
      return field.value === "";
    });

    if (someEmpty) {
      alert("No pueden haber campos de Beneficios vacíos");
    } else {
      alert("Muy bien! Tus beneficios se han guardado!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ícono beneficio:
        <input className="fieldBenefit" type="text" name="iconBenefit" onChange={handleChange} />
      </label>
      <label>
        Texto beneficio:
        <input className="fieldBenefit" type="text" name="textBenefit" onChange={handleChange} />
      </label>
      <input type="submit" />
    </form>
  );
}

function initialState() {
  return {
    nameProduct: "",
    creationDate: "",
    rate: "",
    benefits: [
      { _id: "123", iconBenefit: "done", textBenefit: "Lorem ipsum generator" },
      { _id: "456", iconBenefit: "check-box", textBenefit: "Roma Invicta" }
    ]
  };
}
