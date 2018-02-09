const request=require('request');
const yargs=require('yargs');
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
request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`,
    json:true
},(error,response,body)=>{
    if(error){
        console.log("error in fetching");
    }
    else if(body.status==="OK")
    {
    console.log(body);
    console.log(JSON.stringify(body, undefined, 2));
    console.log(JSON.stringify(response, undefined, 2));
    console.log(JSON.stringify(error, undefined, 2));
    console.log(body.results[0].formatted_address);
    console.log(body.results[0].geometry.location.lat);
    console.log(body.results[0].geometry.location.lng);
    }
    else {
        console.log("not found");
}
});