function download(url){
    return new Promise(function exec(res,rej){
        console.log("starting download of data from",url);
        setTimeout(() => {
            console.log("download complete");
            const content = "ABCDEF";
            rej(content);
        }, 1000);
    });
}

async function steps(){
    try{
        console.log("starting steps");
        const downloadData = await download("www.xyz.com");
        return downloadData;
    }catch(error){
        console.log("encounter an error",error);
    }finally{
        console.log("end");
    }
}
steps()