

{
    class Organization{
        constructor(name, founder, address, employeeCount){
            this.name = name
            this.founder = founder
            this.address = address
            this.employeeCount = employeeCount
        }
        getInfo(){
            return `${this.name} ${this.founder} ${this.address} ${this.employeeCount}`
        }
    }

    let organization = new Organization("apple", "Steve Jobs", "CA95014", 5000)
    console.log(organization);
    console.log(organization.getInfo());
    
    
}

export default "Organization"