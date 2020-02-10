import { sayHello } from "./greet";

function showHello(name: string) {
    console.log(sayHello(name))
}

showHello("TypeScript");
