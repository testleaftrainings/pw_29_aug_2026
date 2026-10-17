import test from "@playwright/test";

test.beforeAll(async()=>{
console.log("Before All Test")
})

test.beforeEach(async()=>{
console.log("Before each Test")
})


test("testcase1", async({page})=>{
console.log("testcase1 executed")
})

test("testcase2", async({page})=>{
console.log("testcase2 executed")
})

test("testcase3", async({page})=>{
console.log("testcase3 executed")
})

test.afterEach(async()=>{
console.log("After each Test")
})


test.afterAll(async()=>{
console.log("After All Test")
})

