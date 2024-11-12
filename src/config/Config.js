const currentEnv={
    prod:{
      BASE_URL:"prod url"
    },
    dev:{
        BASE_URL:"http://10.0.2.2:4000/",
        URL:"helo"
    }
};
const ApiConfig = currentEnv["dev"];
export default ApiConfig;

