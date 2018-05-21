# aLocalDBForJavaScript
This is a local database for javascript, it can easily manage your data in javascript.
<pre>function:
1. localDB.set(key,value);
  the key must be type of string, and the value can be any object.
2. localDB.get(key);
  the key must be type of string, the return of this function is an object.
3.localDB.delete(key);
  the key must be type of string.
4.localDB.getAll();
  the return of this function is a two-dimensional array,the type of every element of this array is like this:[key,value]
5.localDB.deleteAll();
  this function will delete all date.
6.localDB.minSet(key,value,millisecond);
  the key must be type of string, and the value can be any object,the millisecond must be a number.
  this function can set a value where have the lifecycle,it depends on the millisecond.
	</pre>
