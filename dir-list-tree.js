// function
var directory=async function(folder){

  // list
  let list=[];

  // module
  var fs=fs || require('fs');

  // files
	let files=fs.readdirSync(folder);

  // mount
  files.forEach(async function(file){

    // check
    if(fs.statSync(folder+'/'+file).isDirectory()){
      // recoursive
      let files=await directory(folder+'/'+file);
      list.push({type:'directory', path:folder+'/'+file, files:files});
    }else{
      // add
      list.push({type:'file', path:folder+'/'+file});
    }

  });

  // return
  return list;
};

// export
module.exports=directory;
