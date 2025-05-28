/**
 * 
 * 242.有效的字母异位词
 * 
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1: 输入: s = "anagram", t = "nagaram" 输出: true

示例 2: 输入: s = "rat", t = "car" 输出: false

说明: 你可以假设字符串只包含小写字母。
 */

function isAnagram(s:string,t:string):boolean {

    if(s.length != t.length) return false;


    var arr:number[] = new Array(26).fill(0);
    for (let i = 0;i<s.length;i++) {
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    return arr.every(i => i===0);


}

var isAnagramResult:boolean = isAnagram("anagram","nagaram");
console.log(isAnagramResult)