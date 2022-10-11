export const preurl = "http://universities.hipolabs.com/search?country=";
export const countrylist = [
"argentina",
"brasil",
"chile",
"colombia",
"paraguai",
"peru",
"suriname",
"uruguay"];

export function urlbuilder(preurl, countrylist) {
    const urlarray = [];
    for (let i = 0; i < countrylist.length; i++){
        urlarray[i] = preurl + countrylist[i];
    }
    return urlarray;
}

