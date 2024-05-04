class Student {
    constructor(name, surname, birthday) {
      this.name = name;
      this.surname = surname;
      this.birthday = birthday;
      this.arrayStudentsBal = [];
      this.arr = new Array(25).fill(null);
      this.studentRes = [];
    }
    
    dateAge() {
      let currentDate = new Date();
      let ageInMillis = currentDate - this.birthday;
      let ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365));
      return ageInYears;
    }
  
    balStudent() {
      let sum = this.studentRes.reduce((total, num) => total + num, 0);
      let countStudent = this.studentRes.length;
      return sum / countStudent;
    }
  
    present() {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === null) {
          this.arr[i] = true;
          return;
        }
      }
      console.log('Вже відмічений');
    }
  
    absent() {
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === null) {
          this.arr[i] = false;
          return;
        }
      }
      console.log('Вже відмічений');
    }
  
    summary() {
      const bal = this.balStudent();
      const pres = this.arr.filter(item => item === true).length / this.arr.length;
      if (bal > 90 && pres > 0.9) {
        console.log('Молодець!');
      } else if (bal > 90 || pres > 0.9) {
        console.log('Добре, але можна краще');
      } else {
        console.log('Редиска!');
      }
    }
  }
  
  const student1 = new Student('Ivan','Kirichenko', new Date(1998, 5, 15));
  student1.studentRes = [90, 95, 85, 92];
  student1.present(); 
  student1.present(); 
  student1.summary(); 
  
  const student2 = new Student('Igor','Melnik', new Date(1991, 3, 10));
  student2.studentRes = [80, 85, 90, 75];
  student2.absent(); 
  student2.summary(); 
  
  const student3 = new Student('Kostya','Onischenko', new Date(2008, 8, 20));
  student3.studentRes = [95, 98, 93, 92];
  student3.present(); 
  student3.summary(); 
  