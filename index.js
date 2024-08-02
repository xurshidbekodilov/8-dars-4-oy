//Masala1 Massivdagi eng uzun so'zni topadigan funksiya yozing
/*
function func(arr) {
    let max = arr[0];
    for (const iterator of arr) {
        if (iterator.length > max.length) {
            max = iterator;
        }
    }
    return max;
}
*/

//Masala2 Massivdagi stringlarni birlashtirib bitta matn qiladigan funksiya yozing
/*
function func(arr) {
    return arr.join(' ');
}
*/

//Masala3 Massivdagi barcha elementlarni katta harflarga o'zgartiradigan funksiya yozing
/*
function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    return arr;
}
*/

//Masala4 Massivdagi elementlarni ko'paytmasini hisoblaydigan funksiya yozing
/*
function func(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        res *= arr[i];
    }
    return res;
}
*/

//Masala5 Massivdagi elementlarni o'zgartirmasdan ularni saralaydigan funksiya yozing
/*
function func(arr) {
    let res = arr.slice();
    res.sort();
    return res;
}
*/

//Masala6 Massivdagi elementlarni teskariga aylantirib yangi massiv yaratadigan funksiya yozing
/*
function func(arr) {
    let newArr = [];
    for (const iterator of arr) {
        newArr.unshift(iterator);
    }
    return newArr;
}
*/

//Masala7 Massivdagi har bir elementning indeksini qaytaruvchi yangi massiv yaratadigan funksiya yozing
/*
function func(arr){
    let newArr=[];
    for(i=0;i<arr.length;i++){
        newArr.push(i);
    }
    return newArr;
}
*/

//Masala8 Berilgan sonning massivdagi indeksini topadigan funksiya yozing
/*
function func(arr, value) {
    return arr.indexOf(value);
}
*/

//Masala9 Massivdagi har bir elementga qiymat qo'shib yangi massiv yaratadigan funksiya yozing
/*
function func(arr, addvalue){
    return arr.map(element => element + addvalue);
}
*/

//Masala10 Massivdagi qiymatlarni ikki massivga bo'lib chiqadigan: musbat va manfiy qilib ajratadigan funksiya yozing
/*
function func(arr){
    let positiveArr = [];
    let negativeArr = [];
    for (const iterator of arr) {
        if(iterator>0){
            positiveArr.push(iterator);
        }
        else if(iterator<0){
            negativeArr.push(iterator)
        }
    }
    return {positiveArr, negativeArr};
}
*/

//Masala11 Massivni n marta takrorlab yangi massiv yaratadigan funksiya yozing
/*
function func(arr,n){
    let newArr = [];
    for(j=1;j<=n;j++){
        for (const iterator of arr) {
            newArr.push(iterator);
        }
    }
    return newArr;
}
*/

//Masala12 Massivdagi har bir elementni stringga aylantirib yangi massiv yaratadigan funksiya yozing
/*
function func(arr){
    let newArr = [];
    for (const iterator of arr) {
        newArr.push(iterator.toString());
    }
    return newArr;
}   
*/

//Masala13 Massivda juft indeksdagi elementlarni qaytaradigan funksiya yozing
/*
function func(arr){
    let newArr=[];
    for (i=0;i<arr.length;i++) {
        if(i%2==0){
            newArr.push(arr[i]);
        }
    }
    return newArr
}   
*/

//Masala14 Massivda toq sonlar sonini hisoblaydigan funksiya yozing
/*
function func(arr){
    let sum=0;
    for (const iterator of arr) {
        if(iterator%2==1){
            sum+=1
        }
    }
    return sum;
}   
*/

//Masala15 Massivdagi eng kichik va eng katta elementlarni alohida massivlarga ajratadigan funksiya yozing
/*
function func(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let minArr = arr.filter(element => element === min);
    let maxArr = arr.filter(element => element === max);
    return { minArr, maxArr };
}
*/

//Masala16 *Massivdagi barcha elementlarning qiymatini ikki marta takrorlaydigan funksiya yozing
/*
function func(arr){
    let newArr =[];
    for (const iterator of arr) {
        for(i=1;i<=2;i++){
            newArr.push(iterator)
        }
    }
    return newArr;
}
*/

//Masala17 Massivdagi elementlarni random tartibda qaytaradigan funksiya yozing
/*
function func(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
*/

//Masala18 Massivni har bir elementiga qiymat qo'shib natijani string shaklida qaytaradigan funksiya yozing
/*
function func(arr, n) {
    let newArr = [];
    for (const iterator of arr) {
        let newValue = iterator + n;
        newArr.push(newValue.toString());
    }
    return newArr.join(', ');
}
*/

//Masala19 Massivda string bo'lmagan elementlarni olib tashlaydigan funksiya yozing
/*
function func(arr) {
    let newArr = [];
    for (const iterator of arr) {
        if (typeof iterator === "string") {
            newArr.push(iterator);
        }
    }
    return newArr;
}
*/

//Masala20 Massivda nechta bo'sh string borligini aniqlaydigan funksiya yozing
/*
function func(arr) {
    let count = 0;
    for (const iterator of arr) {
        if (iterator === " ") {
            count += 1;
        }
    }
    return count;
}
*/

//Masala21 Massivdagi barcha elementlarni teskari yozib chiqadigan funksiya yozing
/*
function func(arr) {
    let newArr = [];
    for (const iterator of arr) {
        newArr.unshift(iterator);
    }
    return newArr;
}
*/

//Masala22 Massivdagi elementlarning kvadrat ildizini hisoblaydigan funksiya yozing
/*
function func(arr){
    let newArr=[];
    for (const iterator of arr) {
        newArr.push(Math.sqrt(iterator));
    }
    return newArr;
}
*/

//Masala23 Massivdagi faqat musbat va manfiy bo'lmagan sonlarni qaytaradigan funksiya yozing
/*
function func(arr){
    let positiveArr = [];
    let negativeArr = [];
    for (const iterator of arr) {
        if(iterator>0){
            positiveArr.push(iterator);
        }
        else if(iterator<0){
            negativeArr.push(iterator)
        }
    }
    return {positiveArr, negativeArr};
}
*/

//Masala24 Massivni toq va juft indeksdagi elementlar bo'yicha ajratadigan funksiya yozing
/*
function func(arr) {
    let toqArr = [];
    let juftArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            juftArr.push(arr[i]);
        } else {
            toqArr.push(arr[i]);
        }
    }
    return { toqArr, juftArr };
}
*/

//Masala25 Massivdagi har bir elementning faktorialini hisoblaydigan funksiya yozing
/*
function func(arr){
    let newArr =[];
    for(i=0;i<arr.length;i++){
        let res = 1;
        for(j=1;j<=arr[i];j++){
            res *= j;
        }
        newArr.push(res);
    }
    return newArr;
}
*/