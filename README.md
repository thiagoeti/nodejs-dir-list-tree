# NodeJS - List tree width all files and directories.

Install [dir-list-tree](https://www.npmjs.com/package/dir-list-tree)

```shell
npm i dir-list-tree
```

### Script JS

```js
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
```

List tree with all files and directories.
