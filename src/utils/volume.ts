let index: string = "0";

export function volume(vol: string) {
  if (vol == "00" && index !== "95") {
    index = vol;
    return "0";
  }
  if (vol == "05") {
    index = vol;
    return "5";
  }
  if (index == "95") {
    index = "vol";
    return "100";
  } else {
    index = vol;
    return vol;
  }
}