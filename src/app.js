import asap, { later, xxx } from "./modules/asap";
import print from "./modules/print";
import utils from "./modules/utils";

asap(function() {
	console.log('From module asap >>> ', "hello async world!");
});

console.log('From module asap >>> ', xxx);

console.log('From module print >>> ', print('it works'));
console.log('From module print >>> ', print('wowowowowoow'));

console.log('From module utils >>> ', utils.sum(1,1));