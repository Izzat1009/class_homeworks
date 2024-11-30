
{
    class Teacher{
        constructor(fname, lname, address, salary, level){
            this.fname = fname
            this.lname = lname
            this.address = address
            this.salary = salary
            this.level = level
        }
        get salary() {
            return this._salary;
        }
    
        set salary(newSalary) {
            this._salary = newSalary;
        }
        
        getFullName(){
        return `${this.fname}, ${this.lname}`
        }
        descrtiption(){
            return `${this.fname} ${this.lname} ${this.salary} ${this.address} ${this.level}`
        }
    }

    let teacher = new Teacher("Boburmirzo", "BRM", "1000$", "Namangan", 4)
    
   
    console.log(teacher);
    console.log(teacher.getFullName());
    console.log(teacher.descrtiption());
    
    
    
}

export default "Teacher"