describe("Test Todo App", function() {
  it("Visits my local host", function() {
    cy.visit("/");
    cy.get('input[name="new-item"]')
      .type("Gå på promenad")
      .should("have.value", "Gå på promenad");
    cy.get("button").click();
    cy.get(".Item").should("contain", "Gå på promenad");
    cy.get('p[name="clear-all"]').click();
    cy.get(".Item").should("not.exist");
  });
});
