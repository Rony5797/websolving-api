const mongoose =require('mongoose');
const DataSchema = mongoose.Schema({

       email: {type:String, required:true},
       password: {type: String, required:true}   
    },
    {timestamps:true,versionKey:false}
)
const DashboardModel = mongoose.model('Dashboards',DataSchema);
module.exports = DashboardModel;