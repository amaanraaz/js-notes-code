function download(url){
    return new Promise(function exec(res,rej){
        console.log("starting download of data from",url);
        setTimeout(() => {
            console.log("download complete");
            const content = "ABCDEF";
            res(content);
        }, 1000);
    });
}

function writeFile(data){
    return new Promise(function exec(res,rej){
        console.log("Writing file with data ",data);
        setTimeout(() => {
            console.log("completed writing");
            const fileName = "file.txt";
            res(fileName);
        }, 5000);
    })
}

function uploadData(file, url){
    return new Promise(function exec(res,rej){
        console.log("start uploading ",file," on ",url);
        setTimeout(() => {
            console.log("uploaded");
            const response = "success";
            res(response);
        }, 3000);
    })
}

function doAfterReceiving(value){
    let future = iter.next(value);
    if(future.done) return;
    future.value.then(doAfterReceiving)
}

function *steps(){
    const downloadData = yield download("www.gooo.com");
    console.log("downloaded data ",downloadData);
    const fileWritten = yield writeFile(downloadData);
    console.log("file written ", fileWritten);
    const uploadResponse = yield uploadData(fileWritten,"www.drive.com");
    console.log("file uploaded ",uploadResponse);
    return uploadResponse;
}

const iter = steps();
const future = iter.next();
future.value.then(doAfterReceiving)