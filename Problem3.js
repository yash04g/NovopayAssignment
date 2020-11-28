let str = "vvvvaaaa";
function findSecondMaximal(str) {
  let map = new Map();
  let cnt = 1;
  let prev = str[0];
  // Iterate over string and store the maximum consecutive frequency in a map
  for (let i = 1; i < str.length; ++i) {
    if (prev == str[i]) {
      ++cnt;
    } else {
      if (map.has(prev)) {
        let val = map.get(prev);
        if (val < cnt) {
          val = cnt;
        }
        map.set(prev, val);
      } else {
        map.set(prev, cnt);
      }
      prev = str[i];
      cnt = 1;
    }
  }
  if (map.has(prev)) {
    let val = map.get(prev);
    if (val < cnt) {
      val = cnt;
    }
    map.set(prev, val);
  } else {
    map.set(prev, cnt);
  }

  let maxi1 = 0;
  let maxi2 = 0;
  // Find the second maximum
  for (let val of map.values()) {
    if (val > maxi1) {
      if (maxi1 > maxi2) {
        maxi2 = maxi1;
      }
      maxi1 = val;
    } else {
      if (val > maxi2 && val != maxi1) {
        maxi2 = val;
      }
    }
  }

  let ans;
  // Match the second maximum
  for (let entry of map) {
    if (entry[1] === maxi2) {
      ans = entry[0];
    }
  }
  return ans;
}

let val = findSecondMaximal(str);
if (val === undefined) {
  console.log("Second maximum not present");
} else {
  console.log(val);
}
