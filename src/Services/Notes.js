import axios from "axios";

export const getNotes = async () => {
  const response = await axios.get(`https://localhost:7155/api/Note`);
  console.log(response.data);
  return response.data;
};

export const postNotes = async ({ title, description, Status }) => {
  const response = await axios.post(`https://localhost:7155/api/Note`, {
    title,
    description,
    Status,
  });
  console.log(response.data);
  return response.data;
};

export const deleteNotes = async ({ id }) => {
  const response = await axios.delete(`https://localhost:7155/api/Note/${id}`, {
    data: { Id: id },
  });
  console.log(response.data);
  return response.data;
};

export const updateNotes = async ({ id, title, description }) => {
  const response = await axios.put(`https://localhost:7155/api/Note/${id}`, {
    id: id,
    title,
    description,
  });
  console.log(response.data);
  return response.data;
};
