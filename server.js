const express = require( 'express' );
const app = express();
const { faker } = require('@faker-js/faker');


class User {
    constructor() {
      this.id = faker.datatype.number();
      this.firstname = faker.name.firstName();
      this.lastname = faker.name.lastName();
      this.phone = faker.phone.phoneNumber()
      this.email = faker.internet.email();
      this.password = faker.internet.password();
    }
};

class Company {
    constructor() {
      this.id = faker.datatype.number();
      this.name = faker.company.companyName();
      this.address = new Address();
    }
};

class Address {
    constructor() {
      this.street = faker.address.streetName();
      this.city = faker.address.cityName();
      this.state = faker.address.state();
      this.zipCode = faker.address.zipCode();
      this.country = faker.address.county();
    }
};

app.get( '/api/users/new', ( request, response ) => {
    return response.status( 200 ).json( new User() );
});

app.get( '/api/companies/new', ( request, response ) => {
    return response.status( 200 ).json( new Company() );
});

app.get( '/api/user/company', ( request, response ) => {
    return response.status( 200 ).json( [new User(), new Company()] );
});

app.listen( 8080, () => {
    console.log( 'The server is running on port 8080')
});