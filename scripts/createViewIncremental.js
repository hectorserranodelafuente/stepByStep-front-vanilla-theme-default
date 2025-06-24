const fsExtra = require('fs-extra');
const fs = require('fs')

process.argv.forEach(function (val, index, array) {
        
        if(index>1){
            
            if(val.split('=')[0]==="path"){
                
                fsExtra.copySync('./viewIncrementalInit', `./theme/incrementalEjs/${val.split('=')[1]}`)
            
            }
    }

})