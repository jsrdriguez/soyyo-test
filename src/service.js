const axios = require("axios");
const { orderAsc } = require("./utils")

class EntityService {

    async getAllRange(to, from) {
        try {
            let entities = [];

            for (let i = to; i <= from; i++) {    
                const response = await axios.get(`${process.env.API_ENTITY}${i}`);
        
                if (response.status === 200 && 
                    Object.values(response.data.data).length > 0) {

                    const {ipAddress, ...entity} = response.data.data;

                    entities.push(entity);
                }
            }
            
            return orderAsc(entities);

        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new EntityService();