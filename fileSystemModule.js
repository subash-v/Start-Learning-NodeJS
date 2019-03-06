
var fs=require('fs');
    fs.appendFile('text1.txt','hello world',function(err){
        if(err) throw err;
        console.log('saved');
    });
    fs.open('text2.txt','w',function(err){
        if(err) throw err;
        console.log('open');
    }); 
    fs.writeFile('text3.txt','hello content',function(err){
        if(err) throw err;
        console.log('write');
    });
    fs.unlink('text3.txt',function(err){
        if(err) throw err;
        console.log('deleted');
    });
    fs.rename('text3.txt','text4.txt',function(err){
        if(err) throw err;
        console.log('renamed');
    });