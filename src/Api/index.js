import axios from "axios";

const api = {


  getBanks() {
    return new Promise((resolve, reject) => {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        // Authorization: `Token ${token}`,
      };
      axios
        .get(`https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`)
        .then((res) => {
          if (res.status == 200) {
            resolve(res.data);
          } else {
            reject(new Error("error"));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },

  
};

export default api;
