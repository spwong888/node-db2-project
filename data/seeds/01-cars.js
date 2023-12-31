// STRETCH
const cars = [
    {
        vin: 'JF1GC2444PG510518',
        make: 'Toyota',
        model: 'Camry',
        mileage: 1000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: 'WDDGF5HB4DA828865',
        make: 'Toyota',
        model: 'Prius',
        mileage: 3000,
        title: 'salvage',
        transmission: 'manual'
    },
    {
        vin: '2C8GP54L95R123478',
        make: 'Ford',
        model: 'Focus',
        mileage: 5000,
        title: 'clean',
    }
];

    exports.seed = function(knex) {
        return knex('cars')
        .truncate().then(() => {
            knex('cars').insert(cars)
    })
}