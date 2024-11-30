{
    class Paymen{
        constructor(from, to, amount, date, status){
            this.from = from
            this.to = to
            this.amount = amount
            this.date = date
            this.status = status
        }
        get amount() {
            return this._amount;
        }
    
        set amount(newAmount){
            
        }
        getStatus(){
        return `${this.from}, ${this.to} ${this.amount} ${this.date} ${this.status}`
        }
    }

    let paymen = new Paymen("Ibrohim", "Muhammadrasil", 180000, "11/28/2024", true )
    console.log(paymen);
    console.log(paymen.getStatus());
    
    
}

export default "Paymen"