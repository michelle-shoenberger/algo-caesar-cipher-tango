exports.caesarCipher = function(s, amount) {
  let ans = [];
  for (let i=0; i<s.length; i++) {
    let old_ord = s.toLowerCase().charCodeAt(i);
    if (old_ord >= 97 && old_ord <= 122) {
      let shifted = old_ord + amount;
      if (shifted < 97) {
        shifted += 26;
      } else if (shifted > 122) {
        shifted -= 26;
      }
      if (s[i] === s[i].toUpperCase()) {
        ans.push(String.fromCharCode(shifted).toUpperCase())
      } else {
        ans.push(String.fromCharCode(shifted))
      }
    } else {
      ans.push(s[i])
    }
  }
  return ans.join("")
};
