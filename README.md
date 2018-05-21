# aLocalDBForJavaScript
This is a local database for javascript, it can easily manage your data in javascript.<br/>
function:
1. localDB.set(key,value);
<pre>  the key must be type of string, and the value can be any object.</pre>
2. localDB.get(key);
<pre>  the key must be type of string, the return of this function is an object.</pre>
3. localDB.delete(key);
<pre>  the key must be type of string.</pre>
4. localDB.getAll();
<pre>  the return of this function is a two-dimensional array,the type of every element of this array is like this:[key,value]</pre>
5. localDB.deleteAll();
<pre>  this function will delete all date.</pre>
6. localDB.minSet(key,value,millisecond);
<pre>  the key must be type of string, and the value can be any object,the millisecond must be a number.
  this function can set a value where have the lifecycle,it depends on the millisecond.</pre>

