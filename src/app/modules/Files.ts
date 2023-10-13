// This is a exemple of class as a module.
// Create your own Classes in this paste

const fs = require("fs");

class FilesClass {
  public ReadFileSend(path: string) {
    const data = fs.readFileSync(path, "utf8");
    return data;
  }
}

export const Files = new FilesClass();
