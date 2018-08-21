let localDB = {
    localMap: {},

    //set data
    set: function (key, value) {
        localDB.localMap[key] = value;
    },
    //set a batch data
    //arr = [[key1,value1,key2,value2....],[key11,value11,key12,value12...]...]
    arrSet: function (arr) {
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    localDB.localMap[arr[i][0]] = arr[i][1];
                }
            }
        }
    },
    //get data according to key
    get: function (key) {
        return localDB.localMap[key];
    },
    //get a batch data
    //arr = arr[key1,key2,key3...]
    //return: [key1,value1,key2,value2,key3,value3...]
    arrGet: function (arr) {
        let dataArr = [];
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                dataArr.push([arr[i], localDB.localMap[arr[i]]]);
            }
        }
        return dataArr;
    },
    //get data where the key contains the args
    //param:likeKey---is one or more than one parts of the keys in the localDB
    getLike: function (likeKey) {
        let likeArr = [];
        for (let key in localDB.localMap) {
            if (key.indexOf(likeKey) > 0) {
                likeArr.push([key, localDB.localMap[key]]);
            }
        }
        return likeArr;
    },
    //get all data
    //return arr: [key1,value1,key2,value2,key3,value3...]
    getAll: function () {
        let arr = [];
        for (let key in localDB.localMap) {
            arr.push([key, localDB.localMap[key]]);
        }
        return arr;
    },
    //delete data according to key
    delete: function (key) {
        delete localDB.localMap[key];
    },
    //delete a batch data
    //param:arr---[key1,key2,key3,key4...]
    arrDelete: function (arr) {
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                delete localDB.localMap[arr[i]];
            }
        }
    },
    //delete all data
    deleteAll: function () {
        localDB.localMap = {};
    },
    //set data where have the lifecycle
    /**
     *
     * @param key
     * @param value
     * @param millisecond
     */
    minSet: function (key, value, millisecond) {
        if (!util.checkNumber(millisecond)) {
            return "The third args is not a number!";
        } else {
            localDB.localMap[key] = value;
            setTimeout(function () {
                delete localDB.localMap[key];
            }, millisecond);
        }
    }

};

let util = {
    checkNumber: function (val) {
        let regPos = /^\d+(\.\d+)?$/; //Nonnegative floating point number
        let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //Negative floating point number
        return regPos.test(val) || regNeg.test(val);
    },
    compare: function (val1, val2) {
        return val1 - val2;
    }
}