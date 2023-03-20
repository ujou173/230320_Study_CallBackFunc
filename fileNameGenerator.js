const makeName = {
  fileName: function folderName(year, month, day, name, callback) {
    let date = year + "-" + month + "-" + day + "_";
    return callback(date, name);
  }
}

export default makeName;