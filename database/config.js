const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
      //BBDD LOCAL
      // await mongoose.connect('mongodb://127.0.0.1:27017/mern_calendar');
      
      //BBDD MONGO ATLAS
      await mongoose.connect(process.env.DB_CNN);

      console.log('db online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hr de inicializar BD');
    }
}

module.exports = {
    dbConnection,
}