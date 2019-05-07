// package
var dirListTree=require('dir-list-tree');

// app
(async ()=>{

  // debug
  console.log('Start!');

  // exemple
  let tree=await dirListTree('/data');

  // console
  console.log(tree);
  // console.log(JSON.stringify(tree));

  // debug
  console.log('Finish!');

})();
