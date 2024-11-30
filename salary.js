{
    class Salary{
        constructor(to, amount, type, date, status){
            this.to = to
            this.amount = amount
            this.type = type
            this.date = date
            this.status = status
        }
        getFullinfo(){
        return `${this.to}, ${this.amount} ${this.type} ${this.date} ${this.status}`
        }
    }

    let salary = new Salary("Mike", "700", "USD", "11/28/24", true)
    console.log(salary);
    console.log(salary.getFullinfo());
    
    
}
export default "Salary"