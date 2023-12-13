import {readFile,writeFile} from 'fs/promises';

const filePath = new URL('./filetoberead.html',import.meta.url);
let contents = await readFile(filePath,'utf-8');

const data = {
    name:"John",
    age: 81,
    address: "usa"
}
//read handle bars or haml for defining grammars and for of loop

for(const[key,value] of Object.entries(data)){
    contents = contents.replace(`{${key}}`,value)
}

await writeFile(filePath,contents);

// medium.com/litslink/node-js-video-streaming-and-segmentation-in-examples-a1f094dbe8ef