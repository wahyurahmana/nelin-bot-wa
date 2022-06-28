const { axios } = require("axios")

module.exports = [
  {
    name : "jne",
    jne : async (awb) => {
      try {
        const {data} = axios({
          url : `https://api.binderbyte.com/v1/track?api_key=${process.env.API_KEY_BINDERBYTE}&courier=jne&awb=${awb}`
        })
        return data
      } catch (error) {
        throw 'ERROR'
      }
    }
  },
  {
    name : "sicepat",
    sicepat : async (awb) => {
      try {
        const {data} = axios({
          url : `https://api.binderbyte.com/v1/track?api_key=${process.env.API_KEY_BINDERBYTE}&courier=sicepat&awb=${awb}`
        })
        return data
      } catch (error) {
        throw 'ERROR'
      }
    }
  }
]