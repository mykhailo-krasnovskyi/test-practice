const { faker } = require("@faker-js/faker");
test("Faker test", async () => {
    const email = faker.internet.email();
    console.log(email);
    expect(email).toContain('@');
});
