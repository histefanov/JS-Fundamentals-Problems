function solve(str) {
    let index = str.lastIndexOf("\\");
    let file = str.substring(index + 1);
    let dotIndex = file.lastIndexOf('.');
    let fileName = file.substring(0, dotIndex);
    let fileExtension = file.substring(dotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);    
}

solve('C:\\Projects\\Data-Structures\\LinkedList.cs')