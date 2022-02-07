const { add, subtract, multiply, divide, sayHello } = require('../function');

test('Hello World', () => {
    expect(true).toBeTruthy()
})



// Reference Types are special
test('reference types', () => {
    expect([12]).toEqual([12]) // do not use toBe
    expect({ car: 'honda' }).toEqual({ car: 'honda' })
})

describe('math tests', () => {
    // TO BE
    test('add should add two numbers', () => {
        expect(add(4, 2)).toEqual(6)
    })

    test('subtract should subtract two numbers', () => {
        expect(subtract(10, 8)).toEqual(2)
    })
})

// contains
const myArr = ['shoe', 'sock', 'dress', 'hat']

test('myArr contains hat', () => {
    expect(myArr).toContain('hat')
})

test('myArr will add chair', () => {
    const myItem = 'chair'
    myArr.push(myItem)

    expect(myArr).toContain('chair')
})

// Test object methods
let bankAccount = {
    balance: 1000,
    depositMoney(amount) {
        this.balance += amount;
    },
    withdrawMoney(amount) {
        this.balance -= amount;
    },
};

describe('bank account methods', () => {
    // beforeEach, afterEach, beforeAll, afterAll
    beforeEach(() => {
        bankAccount.balance = 1000;
    })

    test('bank account can deposit money', () => {
        bankAccount.depositMoney(500)
        expect(bankAccount.balance).toEqual(1500)
    })

    test('bank account can withdraw money', () => {
        bankAccount.withdrawMoney(700)
        expect(bankAccount.balance).toEqual(300)
    })
})