const axios = require("axios");
const junApi = async (prompt, author, name, id) => {
  try {
    const response = await axios.post(`https://gpt69free.onrender.com/api`, {
      prompt,
      author,
      name,
      id
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
module.exports = junApi;
