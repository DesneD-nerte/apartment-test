const apartments = [
    { areaKitchen: 11.4, areaLive: 14.5, areaTotal: 33.5 },
    { areaKitchen: 20.4, areaLive: 34.5, areaTotal: 53.5 },
    { areaKitchen: 40.4, areaLive: 74.5, areaTotal: 133.5 },
    { areaKitchen: 10.4, areaLive: 24.5, areaTotal: 43 },
];

const areaTotal = {
    totalStart: 20,
    totalEnd: 0,
};
const areaLive = {
    liveStart: 0,
    liveEnd: 40,
};
const areaKitchen = {
    kitchenStart: 55,
    kitchenEnd: 60,
};
const areas = [areaTotal, areaLive, areaKitchen];
console.log(areas);
const keyArray = [];

for (const oneArea of areas) {
    for (const key of Object.keys(oneArea)) {
        console.log(oneArea[key]);
        if (oneArea[key] > 0) {
            keyArray.push(key);
        }
    }
}

console.log(keyArray);

const result = areas.map((oneArea) => {
    return keyArray.map((oneKey, index) => {
        if (oneArea[oneKey] && oneKey.includes("Start")) {
            const stringCase =
                "area" + oneKey[0].toUpperCase() + oneKey.slice(1).replace("Start", "");
            return apartments.filter((oneApartment) => oneApartment[stringCase] >= oneArea[oneKey]);
        }
        if (oneArea[oneKey] && oneKey.includes("End")) {
            const stringCase =
                "area" + oneKey[0].toUpperCase() + oneKey.slice(1).replace("End", "");
            console.log(stringCase);
            return apartments.filter((oneApartment) => oneApartment[stringCase] <= oneArea[oneKey]);
        }
        return;
    });
});

console.log("result", result);
