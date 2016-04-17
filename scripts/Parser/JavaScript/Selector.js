/**
 * Created by edwin on 2016/4/17.
 */
var Selector = {
    getTag: function (tag, results) {
        results = results || [];
        results.push.apply(results, document.getElementsByName(tag));
        return results;
    },
    getId: function (id, results) {
        results = results || [];
        results.push(document.getElementById(id));
        return results;
    },
    getClass: function (className, results) {
        results = results || [];
        if (document.getElementsByClassName) {
            results.push.apply(results, document.getElementsByClassName(className));
        } else {
            this.each(this.getTag('*'), function (i, v) {
                if ((' ' + v.className + ' ').indexOf(' ' + className + ' ') != -1) {
                    results.push(v);
                }
            });
        }
        return results;
    },
    each: function (arr, fn) {
        for (var i = 0; i < arr.length; i++) {
            if (fn.call(arr[i], i, arr[i]) === false) {
                break;
            }
        }
    },
    get: function (selector, results) {
        results = results || [];
        var rquickExpr = /^(?:#([\w-]+)|\.([\w-]+)|([\w]+)|(\*))$/,
            m = rquickExpr.exec(selector);

        if (m) {

            if (m[1]) {
                results =  Selector.getId(m[1], results);
            } else if (m[2]) {
                results =  Selector.getClass(m[2], results);
            } else if (m[3]) {
                results =  Selector.getTag(m[3], results);
            } else if (m[4]) {
                results =  Selector.getTag(m[4], results);
            }

        }
    }
};