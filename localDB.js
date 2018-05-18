var localDB = {
	localMap: {},

	//根据key，value设置数据
	set: function(key, value) {
		localDB.localMap[key] = value;
	},
	//根据key获得数据
	get: function(key) {
		return localDB.localMap[key];
	},
	//根据key删除数据
	delete: function(key) {
		delete localDB.localMap[key];
	},
	//获得所有已存数据，数据的返回值为二维数组，数组的每个元素都是以[key,value]格式存储
	getAll: function() {
		var arr = new Array();
		for(var key in localDB.localMap) {
			arr.push([key, localDB.localMap[key]]);
		}
		return arr;
	},
	//删除已存的所有数据
	deleteAll: function() {
		localDB.localMap = {};
	},
	//设置带有生命周期的参数
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
