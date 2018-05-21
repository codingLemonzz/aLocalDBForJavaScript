var localDB = {
	localMap: {},

	set: function(key, value) {
		localDB.localMap[key] = value;
	},

	get: function(key) {
		return localDB.localMap[key];
	},

	delete: function(key) {
		delete localDB.localMap[key];
	},

	getAll: function() {
		var arr = new Array();
		for(var key in localDB.localMap) {
			arr.push([key, localDB.localMap[key]]);
		}
		return arr;
	},

	deleteAll: function() {
		localDB.localMap = {};
	},

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
