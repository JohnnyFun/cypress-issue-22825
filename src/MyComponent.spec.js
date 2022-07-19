import MyComponent from './MyComponent.svelte'
import { mount } from '/test-utils/cypress-svelte-mount/index.js'

describe('MyComponent', () => {
  it('Should do the things', () => {
    mount(MyComponent)
    cy.get('[data-test="header"]').should('contain', 'Oh hi')
  })
})