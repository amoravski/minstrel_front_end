import axios from 'axios';

export default axios.create({
    baseUrl: "http://open.mapquestapi.com/",
    crossDomain: true
});
