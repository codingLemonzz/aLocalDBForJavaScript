# a data manage tool for javascript
This is a data manage tool for javascript, it can easily manage your data in javascript.<br/>

### 2018.08.21 update: <br/>
	matching the ES6 javascript grammar.

# function:<br/>
## set Data
### 1. localDB.set(key,value);<br/>
  The key must be type of string, and the value can be any object or even a function.<br/>
### 2. localDB.arrSet(arr);<br/>
  The input args must be an array,otherwise it will not run.And the args of this function must be a two-dimensional array like: [[key1,value1],[key2,value2],....]<br/>
## get Data
### 3. localDB.get(key);<br/>
  The key must be type of string, the return of this function is an object or a function.If it's a fuction,you can trigger the function like this:(localDB.get('function name'))();<br/>
### 4. localDB.arrGet(arr);<br/>
  The input args must be an array,otherwise it will return an empty array.And the return of this function is a two-dimensional array.<br/>
### 5. localDB.getLike(likeKey);<br/>
  The input args must be a string,and this function can find all the key like the likeKey in the data pool.The return of this function is a two-dimensional array.But I tend you to use advanced search.<br/>
### 6. localDB.getAll();<br/>
  The return of this function is a two-dimensional array,the type of every element of this array is like this:[key,value]<br/>
## delete data
### 7. localDB.delete(key);<br/>
  The key must be type of string.<br/>
### 8. localDB.arrDelete(arr);<br/>
  The arr must be an array.And the args in arr is the key that you want to delete.<br/>
### 9. localDB.deleteAll();<br/>
  This function will delete all date.<br/>
### 10. localDB.minSet(key,value,millisecond);<br/>
  The key must be type of string, and the value can be any object,the millisecond must be a number.<br/>
  This function can set a value where have the lifecycle,it depends on the millisecond.<br/>

