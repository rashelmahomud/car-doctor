export const getServices = async () => {
  const res = await fetch("http://localhost:3000/searvices/api/get-all");
  const data = await res.json();
  return data;
};

export const getServiceDetails = async (id) => {
  const res = await fetch(`http://localhost:3000/searvices/api/${id}`);
  const service = await res.json();
  return service;
};
