
{
    class Student{
        constructor(fname, lname, tel, address){
            this.fname = fname
            this.lname = lname
            this.tel = tel
            this.address = address
        }
        get firstName() {
            return this._firstName;
        }
    
        set firstName(newFirstName) {
            this._firstName = newFirstName;
        }
    
        getFullName(){
        return `${this.fname}, ${this.lname}`
        }
        info(){
            return `${this.fname} ${this.lname} ${this.tel} ${this.address}`
        }
    }

    let student = new Student("Bahodir", "Jalilov", 998815333, "Samarqand darvoza")

    student.firstName =  "Mike"
     
    console.log(student);
    console.log(student.getFullName());
    console.log(student.info());
    console.log( student.firstName );
    
    
    
}
export default "Students"




