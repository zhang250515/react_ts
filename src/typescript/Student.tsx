class Student {
    fullName: string;
    constructor(private firstName: string, private lastName: string) {
        this.fullName = firstName + ' - ' + lastName
    }
}

export {Student}