// function
var directory=async function(folder, clean=''){

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
      let f=folder.replace(clean, '');
      // recoursive
      let files=await directory(folder+'/'+file, clean);
      list.push({type:'directory', path:f+'/'+file, files:files});
    }else{
      let f=folder.replace(clean, '');
      // add
      list.push({type:'file', path:f+'/'+file});
    }

  });

  // return
  return list;
};

// export
module.exports=directory;
