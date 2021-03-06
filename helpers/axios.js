const axios = require('axios');

module.exports = {

  postBug(bug){
    return axios
      .post('https://small-express-server.herokuapp.com/bugs', bug)
      .then((res) => res.data)
      .catch(err =>
        err.response.data
      );
  },

  getBug(id){
    return axios
      .get(id === undefined ?
        'https://small-express-server.herokuapp.com/bugs/'
        :
        'https://small-express-server.herokuapp.com/bugs/' + id)
      .then((res) => res.data)
      .catch(err => {
        console.log(err.data);
      });
  },

  removeBug(id){
    return axios
      .delete('https://small-express-server.herokuapp.com/bugs/' + id)
      .then((res) => res.data)
      .catch(err => {
        console.log(err.data);
      });
  },

  updateBug(id, bug){
    return axios
      .patch('https://small-express-server.herokuapp.com/bugs/' + id, bug)
      .then((res) => res.data)
      .catch(err =>
         err.response.data
      );
  },

};