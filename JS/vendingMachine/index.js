import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
await colaGenerator.setup();

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();
