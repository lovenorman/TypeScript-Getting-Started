interface Person {
    name: string;
    age?: number;           //Behöver inte ärvas av klassen
    formatName: () => string;
}