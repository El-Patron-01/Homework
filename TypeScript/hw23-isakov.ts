class User implements IUserMethods {
    
    constructor(public schoolName: string, public position: string, public salary: number) {
        this.schoolName = schoolName;
        this.position = position,
            this.salary = salary;
    }
    public getSchoolName(): string {
        return this.schoolName;
    }
    public userInfo(): IUserInfo {
        return {
            position: this.position,
            salary: this.salary
        };
    }
}
interface IUserInfo {
    position: string;
    salary: number;
}
interface IUserMethods {
    getSchoolName(): string;
}
enum Positions {
    boss = 'Vasia',
    hrManager = 'Zina',
    sales = 'Akakiy'
}

