// Main functionality file for everything to do with the 301 redirects


export function concatStrings(string1: string, string2: string) {

  if (typeof string1 === "string" && typeof string2 === "string") {

    return string1 + string2;
  } else {
    return "Error";
  }
}

