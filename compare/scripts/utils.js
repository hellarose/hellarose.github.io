/**
 * 对比两个普通对象 通过 deepseek 生成 
 * @param {*} a 
 * @param {*} b 
 * @returns {{
*   onlyA: any,
*   onlyB: any,
*   same: any,
*   valueDiff: any
* }}
*/
function diffObjects(a, b) {
 const result = {
   onlyA: {},
   onlyB: {},
   same: {},
   valueDiff: {}
 };

 const aKeys = Object.keys(a);
 const bKeys = Object.keys(b);
 const allKeys = new Set([...aKeys, ...bKeys]);

 // 判断是否为纯对象(排除数组和null)
 const isObject = x => x !== null && typeof x === 'object' && !Array.isArray(x);
 // 判断是否为数组
 const isArray = Array.isArray;
 // 判断子差异是否存在实际变化
 const hasDifference = diff =>
   Object.keys(diff.onlyA).length > 0 ||
   Object.keys(diff.onlyB).length > 0 ||
   Object.keys(diff.valueDiff).length > 0;

 allKeys.forEach(key => {
   const inA = a.hasOwnProperty(key);
   const inB = b.hasOwnProperty(key);
   const aVal = a[key];
   const bVal = b[key];

   // 处理仅存在于A的情况
   if (!inB) {
     result.onlyA[key] = aVal;
     return;
   }

   // 处理仅存在于B的情况
   if (!inA) {
     result.onlyB[key] = bVal;
     return;
   }

   // 类型相同且为可递归类型
   if (
     (isObject(aVal) && isObject(bVal)) ||
     (isArray(aVal) && isArray(bVal))
   ) {
     const childDiff = diffObjects(aVal, bVal);
     if (hasDifference(childDiff)) {
       result.valueDiff[key] = childDiff;
     } else {
       result.same[key] = aVal;
     }
   }
   // 基础值比较
   else if (aVal === bVal) {
     result.same[key] = aVal;
   } else {
     result.valueDiff[key] = { a: aVal, b: bVal };
   }
 });

 return result;
}


function qs(es){return document.querySelector(es)}

function parseTareaJson(tareaValue){
  return Function('return  ' + tareaValue)()
}