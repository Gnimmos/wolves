var Deploy = require('ftp-deploy');
var ftpDeploy = new Deploy();
 
var config = {
    host : "commedia.wiki",
    user : "georgen@commedia.wiki",
    password : "@^f1*f1hf#3@",
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: '/wolvestalk.commedia.wiki/public_html/',
    include: ['*'],
    deleteRemote: true 
}


ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});ftpDeploy.on("uploading", function(data) {
    data.totalFilesCount; 
    data.transferredFileCount;
    data.filename; 
});
ftpDeploy.on("uploaded", function(data) {
    console.log(data); 
});
ftpDeploy.on("log", function(data) {
    console.log(data);
});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err);
});