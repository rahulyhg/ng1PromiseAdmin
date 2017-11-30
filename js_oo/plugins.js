/**
 * Created by mr.whg on 2017/6/7.
 */

$.fn.extend({
    /*只针对数字数组。排序方式可选。asc正序，desc倒序。默认asc。返回值：排序后的数组。*/
    numArrSort: function (e) {
        if (!e.arr) {
            return;
        }
        var method = e.method,
            arr = e.arr,
            asc = function (arr) {
                arr.sort(function (a, b) {
                    return a - b
                });
            },
            desc = function (arr) {
                arr.sort(function (a, b) {
                    return b - a
                });
            },
            callback = function (res) {
                if (e.callback && typeof e.callback=="function") {
                    setTimeout(function () {
                        e.callback(res)
                    }, 0);
                }
            };
        switch (method) {
            case 'asc':
                asc(arr);
                callback(arr);
                break;
            case 'desc':
                desc(arr);
                callback(arr);
                break;
            default:
                asc(arr);
                callback(arr);
        }
    },
    /*localStorage存储为字符串/获取为json对象。默认获取。返回值：执行函数的结果。*/
    localStorage: function (e) {
        if (!e.data || !e.item) {
            return;
        }
        var method = e.method,
            item = e.item,
            data = e.data,
            set = function (data) {
                localStorage.setItem(item, JSON.stringify(data));
                return JSON.stringify(data);
            },
            get = function (item) {
                JSON.parse(localStorage.getItem(item));
                return JSON.parse(localStorage.getItem(item));
            },
            callback = function (res) {
                if (e.callback && typeof e.callback=="function") {
                    setTimeout(function () {
                        e.callback(res)
                    }, 0);
                }
            };
        switch (method) {
            case 'set':
                set(data);
                callback(set(data));
                break;
            case 'get':
                get(item);
                callback(get(item));
                break;
            default:
                get(item);
                callback(get(item));
        }
    },
    /*复制n份DOM元素到指定的元素内。默认1份，默认目标是DOM元素本身。返回值：被复制的DOM元素对象。*/
    copyEle: function (e) {
        if (!e.ele) {
            return;
        }
        var num = e.num,
            ele = $(e.ele),
            eles = '',
            callback = function (res) {
                if (e.callback && typeof e.callback=="function") {
                    setTimeout(function () {
                        e.callback(res)
                    }, 0);
                }
            };
        if (!num) {
            num = 1
        }
        for (var i = 1; i <= num; i++) {
            eles += ele.html();
        }
        if (e.target) {
            $(e.target).append(eles);
            callback(ele);
        } else {
            $(e.ele).append(eles);
            callback(ele);
        }
    }
});

$(function () {
    /*
     EG:针对数字数组的排序。
     */
    //var arr = [1, 5, 6, 8, 4, 9, 9, 5, 5, 4, 5, 2, 1, 5, 5, 465, 45, 5, 35, 45, 43];
    //$.fn.numArrSort({
    //    method: 'asc',
    //    arr: arr,
    //    callback: function (res) {
    //        console.log(res);
    //    }
    //});

    /*
     EG:localStorage的存取操作。
     */

    //var ls = [{
    //    method: 'get',
    //    data: [1, 1, 1, 1, 21, 0, '语文', 2, '语文', '语文', 'nhn', '语文', 'ghg', 'jhj', 'gfgf', '语文'],
    //    callback: 'function (res) {console.log(res)}'
    //},
    //    {
    //        first: [45, 11, 2, 5, 45, 45, 45, 4, 54, 5, 45, 4541],
    //        second: ['语文', '语文', 'nhn', '语文', 'ghg', 'jhj', 'gfgf']
    //    }];
    //$.fn.localStorage({
    //    method: 'set',
    //    item: 'testData',
    //    data: ls,
    //    callback: function (res) {
    //        console.log(res);
    //    }
    //})

    /*
     EG:复制DOM元素。
     */

    //$.fn.copyEle({
    //    num: 6,
    //    target: '#jqqqq',
    //    ele: '#jqplugin',
    //    callback: function (ele) {
    //        console.log(ele);
    //        ele.css({'background':'#f60'})
    //    }
    //})
});
