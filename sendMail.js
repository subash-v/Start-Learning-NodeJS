var nodemailer =require('nodemailer');
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth:{
        user:"subashv2096@gmail.com",
        pass:"subashv@2096"
    }
});

var mailOptions={
    from:'subashv2096@gmail.com',
    to:'subash.v@xelpmoc.in',
    subject:'sending mail using Node.js',
    text:'That was easy!'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("email sent:"+info.response);
    }
})