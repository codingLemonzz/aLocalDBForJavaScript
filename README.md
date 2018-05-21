# a local database for javascript
This is a local database for javascript, it can easily manage your data in javascript.<br/>
function:<br/>
1. localDB.set(key,value);<br/>
  the key must be type of string, and the value can be any object or even a function.<br/>
2. localDB.get(key);<br/>
  the key must be type of string, the return of this function is an object or a function.If it's a fuction,you can trigger the function like this:(localDB.get('function name'))();<br/>
3. localDB.delete(key);<br/>
  the key must be type of string.<br/>
4. localDB.getAll();<br/>
  the return of this function is a two-dimensional array,the type of every element of this array is like this:[key,value]<br/>
5. localDB.deleteAll();<br/>
  this function will delete all date.<br/>
6. localDB.minSet(key,value,millisecond);<br/>
  the key must be type of string, and the value can be any object,the millisecond must be a number.<br/>
  this function can set a value where have the lifecycle,it depends on the millisecond.<br/>

