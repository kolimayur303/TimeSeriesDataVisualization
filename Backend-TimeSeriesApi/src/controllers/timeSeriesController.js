const TimeSeries = require("../model/timeseriesModel");

// RESTful API endpoint for storing time series dat


// Get All products
const getAllTimeSeries = async (req, res) => {
    try {
        const TimeSeriesData = await TimeSeries.find();
        res.json(TimeSeriesData);
      } catch (error) {
        res.json({ message: error });
      }
};

const addTimeSeries = async (req, res) => {

    try {
        // Extract variables and timestamp from the request body
        const { variable1, variable2, variable3, variable4, variable5, variable6, variable7, variable8, variable9, variable10, timestamp } = req.body;
    
        // Create a new TimeSeries document
        const newTimeSeriesData = new TimeSeries({
        variable1,
        variable2,
        variable3,
        variable4,
        variable5,
        variable6,
        variable7,
        variable8,
        variable9,
        variable10,
        timestamp: timestamp || Date.now(), // Use provided timestamp or current time
    
        });

        // Save to MongoDB
        await newTimeSeriesData.save();
        return res.status(201).json({ message: 'Time series data saved successfully' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
}


module.exports = {
    addTimeSeries,
    getAllTimeSeries
}



// // Get All products
// const user_all = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//       } catch (error) {
//         res.json({ message: error });
//       }
// };

// // Single user
// const user_details = async (req, res) => {
//     try {
//         const user = await User.findOne({'user_id':req.body.user_id});
//         res.json(user);
//       } catch (error) {
//         res.json({ message: error });
//       }
// };

// // Add New user
// const user_create = async (req, res) => {
//     const user = new User({
//       user_id: req.body.user_id,
//       name: req.body.name,
//       email: req.body.email
//       });
    
//       try {
//         const savedUser = await user.save();
//         res.send(savedUser);
//       } catch (error) {
//         res.status(400).send(error);
//       }
// };

// // Update user
// const user_update = async (req, res) => {
//     try {
//         const user = {
//           user_id: req.body.user_id,
//           name: req.body.name,
//           email: req.body.email
//         };
//         const updateduser = await User.updateOne({'user_id':req.body.user_id},user);
//         res.json(updateduser);
//       } catch (error) {
//         res.json({ message: error });
//       }
// };

// // Delete user
// const user_delete = async (req, res) => {
//     try {
//         const removeUser = await User.deleteOne({'user_id':req.body.user_id});
//         res.json(removeUser);
//       } catch (error) {
//         res.json({ message: error });
//       }
// };

// module.exports = {
//     user_all,
//     user_details, 
//     user_create,
//     user_update,
//     user_delete
//   }