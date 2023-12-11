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

async function steps(){
    console.log("starting steps");
    const downloadData = await download("www.xyz.com");
    console.log("Downloaded",downloadData);
    const writeData = await writeFile(downloadData);
    console.log("written", writeData);
    const uploadResponse = await uploadData(writeData, "www.drive.google.com");
    console.log("Upload response is", uploadResponse);
    return uploadResponse;
}

steps().then((value)=>{console.log("completed with",value);})
//just for example that after registering async await code run fine for synchronous
console.log("outside");
for(let i = 0 ; i < 10000000000; i++) {

}
setTimeout(function f() {console.log("timer done")}, 4000);
console.log("for loop done");