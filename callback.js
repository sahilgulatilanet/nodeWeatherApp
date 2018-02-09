var getuser=(iid,usernm)=>{
    var user={
        id:iid,
        name:'abc'
    };
    setTimeout(()=>{
        usernm(user);
    },2000);

};
getuser(31,(usrobj)=>{
    console.log(usrobj);
});