var localDB = {
	localMap: {},

	//set data 
	set: function(key, value) {
		localDB.localMap[key] = value;
	},
	//set a batch data
	arrSet: function(arr) {
		if(Array.isArray(arr)) {
			for(var i = 0; i < arr.length; i++) {
				if(Array.isArray(arr[i])) {
					localDB.localMap[arr[i][0]] = arr[i][1];
				}
			}
		}
	},
	//get data according to key
	get: function(key) {
		return localDB.localMap[key];
	},
	//get a batch data 
	arrGet: function(arr) {
		var dataArr = new Array();
		if(Array.isArray(arr)) {
			for(var i = 0; i < arr.length; i++) {
				dataArr.push([arr[i], localDB.localMap[arr[i]]]);
			}
		}
		return dataArr;
	},
	//get data where key contains the args
	getLike: function(likeKey) {
		var likeArr = new Array();
		for(var key in localDB.localMap) {
			if(key.indexOf(likeKey) > 0) {
				likeArr.push([key, localDB.localMap[key]]);
			}
		}
		return likeArr;
	},
	//get all data 
	getAll: function() {
		var arr = new Array();
		for(var key in localDB.localMap) {
			arr.push([key, localDB.localMap[key]]);
		}
		return arr;
	},
	//delete data according to key
	delete: function(key) {
		delete localDB.localMap[key];
	},
	//delete a batch data
	arrDelete: function(arr) {
		if(Array.isArray(arr)) {
			for(var i = 0; i < arr.length; i++) {
				delete localDB.localMap[arr[i]];
			}
		}
	},
	//delete all data
	deleteAll: function() {
		localDB.localMap = {};
	},
	//set data where have the lifecycle
	minSet: function(key, value, millisecond) {
		if(!util.checkNumber(millisecond)) {
			return "The third args is not a number!";
		} else {
			localDB.localMap[key] = value;
			setTimeout(function() {
				delete localDB.localMap[key];
			}, millisecond);
		}
	}

};

var util = {
	checkNumber: function(val) {
		var regPos = /^\d+(\.\d+)?$/; //Nonnegative floating point number
		var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //Negative floating point number
		if(regPos.test(val) || regNeg.test(val)) {
			return true;
		} else {
			return false;
		}
	}
}
