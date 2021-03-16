class Lunch {
    private myLunch:string;

    constructor(myLunch: string){
        this.myLunch = myLunch;
    }

    mc() {
        return this.myLunch;
    }

    kfc(n1:number,n2:number,n3:number) {
        return n1+n2+n3;
    }
}

const todayLunch = new Lunch('김밥');
console.log(todayLunch.mc());
console.log(todayLunch.kfc(1,2,3));
