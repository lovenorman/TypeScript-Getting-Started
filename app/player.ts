class Player implements Person{
    name: string;
    age: number;
    highSore: number;

    formatName(){
        return this.name.toUpperCase();
    }
}