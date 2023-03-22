import AreaComputation from "./areaComputation";
import Circle from "./circle";
import Rectangle from "./rectangle";
import Triangle from "./triangle";

const circle = new Circle(2);
const rect = new Rectangle(2, 5);
const triangle = new Triangle(4, 7);

const area = new AreaComputation([circle, rect, triangle]);

console.log('total area', area.totalArea(), 'm²');
