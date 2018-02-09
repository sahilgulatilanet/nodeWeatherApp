const yargs=require('yargs');
const axios=require('axios');
const args=yargs
    .option({
        a:{
            demand:true,
            alias: 'address',
            describe:'Address for weather',
            string:true
        }
    })
    .help()
    .argv;
var encodeaddress=encodeURIComponent(args.address);
var urll=`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`;
console.log(urll);
axios.get(urll).then((response)=>{
    console.log(response.data);
}).catch((e)=>{
    console.log(e);
});