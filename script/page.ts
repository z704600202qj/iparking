const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

const fileName = readlineSync.question('component name:');
const filePath = path.resolve(__dirname, `../src/components/${fileName}`)  // 组件地址
const templatePath = path.resolve(__dirname, `../src/template/Page`)  // 模板地址


//读取文件，并且替换文件中指定的字符串
/**
 * 
 * @param componentPath 读取
 * @param file_name 
 * @param sourceRegx 
 * @param targetStr 
 * @param writePath 
 */
let replaceFile = function (componentPath, file_name, sourceRegx, targetStr, writePath) {
    fs.readFile(componentPath, function (err, data) {
        if (err) {
            return err;
        }
        let str = data.toString();
        str = str.replace(sourceRegx, targetStr);
        let name = file_name.replace(sourceRegx, targetStr);
        fs.writeFile(`${writePath}/${name}`, str, function (err) {
            if (err) return err;
        });
    });
}
/**
 * 
 * @param tmpath 模板路径
 * @param writePath 写入路径
 */
let read_file = (tmpath, writePath) => {
    fs.readdir(tmpath, function (error, data) {
        if (error) {
            console.log(error);
            return false;
        }
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            fs.stat(`${tmpath}/${item}`, function (err, status) { //判断文件的状态，用于区分文件名/文件夹
                if (err) {
                    return err;
                }
                let isFile = status.isFile();//是文件
                let isDir = status.isDirectory();//是文件夹
                if (isFile) {
                    replaceFile(`${tmpath}/${item}`, item, /Template/g, fileName, writePath)
                }
                if (isDir) {
                    fs.mkdir(`${filePath}/${item}`, function (error) {
                        if (error) {
                            console.log(error);
                            return false;
                        }
                        read_file(`${tmpath}/${item}`, `${filePath}/${item}`)
                    })
                }
            })
        }
       
    })
}

fs.access(filePath, fs.constants.F_OK, (err) => {

    read_file(templatePath, filePath)
    if (!err) return console.log('存在');
    fs.mkdir(filePath, function (error) {
        if (error) {
            return false;
        }
        console.log('创建目录成功');
    })

});