let zero = (a) => {if(!a) return ()=>0; return a(0)};
let one = (a) => {if(!a) return ()=>1; return a(1)};
let two = (a) => {if(!a) return ()=>2; return a(2)};
let three = (a) => {if(!a) return ()=>3; return a(3)};
let four = (a) => {if(!a) return ()=>4; return a(4)};
let five = (a) => {if(!a) return ()=>5; return a(5)};
let six = (a) => {if(!a) return ()=>6; return a(6)};
let seven = (a) => {if(!a) return ()=>7; return a(7)};
let eight = (a) => {if(!a) return ()=>8; return a(8)};
let nine = (a) => {if(!a) return ()=>9; return a(9)};
let plus = (rightA) => (leftA) => `${leftA}+${rightA()}=${leftA+rightA()}`;
let minus = (rightA) => (leftA) => `${leftA}-${rightA()}=${leftA-rightA()}`;
let times = (rightA) => (leftA) => `${leftA}*${rightA()}=${leftA*rightA()}`;
let dividedBy = (rightA) => (leftA) => `${leftA}/${rightA()}=${leftA/rightA()}`;
console.log(six(dividedBy(two())));