
class FileSystemItem {
  show() {
    throw new Error("Method 'show()' must be implemented.");
  }
}

class File extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
  }
  
  show() {
    console.log(`File: ${this.name}`);
  }
}


class Folder extends FileSystemItem {
  constructor(name) {
    super();
    this.name = name;
    this.items = [];
  }
  
  add(item) {
    this.items.push(item);
  }
  
  show() {
    console.log(`Folder: ${this.name}`);
    this.items.forEach(item => item.show());
  }
}


const file1 = new File('file1.txt');
const file2 = new File('file2.txt');
const folder = new Folder('Documents');

folder.add(file1);
folder.add(file2);

folder.show();

