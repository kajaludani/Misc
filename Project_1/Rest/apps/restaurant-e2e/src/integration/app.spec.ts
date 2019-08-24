import { getGreeting } from '../support/app.po';

describe('restaurant', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to restaurant!');
  });
});
