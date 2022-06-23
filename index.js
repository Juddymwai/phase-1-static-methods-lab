class Formatter {
  //add static methods here
  static capitalize(string){
    let cap= string.charAt(0). toUpperCase()
    return cap + string.slice (1)

  }
  static sanitize(string){
    return string.replace (/[^A-Za-z0-9 \-']+/g, "")


  }
  static titleize(sring){

  }
}