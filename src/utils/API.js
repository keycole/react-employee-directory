import axios from "axios";

export default {
    search: () => {
      return axios.get("https://randomuser.me/api/?nat=us&inc=name,location,phone,email,picture&results=50");
    }
  };