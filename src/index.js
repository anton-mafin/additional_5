module.exports = function check(str, bracketsConfig) {
var array = new Array();
for (var i = 0; i < str.length; i++) {
    array[i] = str[i];   
}

if (array.length % 2 == 1) {
    //console.log('false');
    return false;
}
else {
    for (var i = 0; i < array.length; ++i) {
        //console.log('i = ', i);
        var flag = false;
        for (var j = 0; j < bracketsConfig.length; ++j) {
            //console.log('j = ', j);
            if(array[i] == bracketsConfig[j][0] && array[i + 1] == bracketsConfig[j][1] ) {
                //console.log(array[i] == bracketsConfig[j][k] && array[i + 1] == bracketsConfig[j][k + 1]);
                array.splice(i, 2);
                //console.log(array);
                i = -1;
                break;
            }
        }       
    }
}

if(array.length == 0){
    return true;
}
else{
    return false;
}
}
