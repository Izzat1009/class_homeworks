{
    class Group{
        constructor(name, room, level, StudentCounts, teacher){
            this.name = name
            this.room = room
            this.level = level
            this.StudentCounts = StudentCounts
            this.teacher = teacher
        }
        get studentCount() {
            return this._studentCount;
        }
    
        set studentCount(newCount) {
            this._studentCount = newCount;
        }
        fullInformation(){
            return `${this.name} ${this.room} ${this.StudentCounts} ${this.teacher}`
        }
    }

    let group = new Group("N83", "Slack", 4, 17, "Boburmirzo")
    console.log(group);
    console.log(group.fullInformation());
    
    
}

export default "Group"