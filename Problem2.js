let s = "abxdddd";

function removeConsecutive(s) {
  let cnt = 1;
  let ans = s[0];
  let prev = s[0];
  for (let i = 1; i < s.length; ++i) {
    if (s[i] == prev) {
      if (cnt == 2) {
        continue;
      } else {
        cnt++;
        ans += s[i];
      }
    } else {
      ans += s[i];
      cnt = 1;
      prev = s[i];
    }
  }
  return ans;
}
console.log(removeConsecutive(s));
s = "aaabbbccc";
console.log(removeConsecutive(s));
s = "aabbc";
console.log(removeConsecutive(s));
