describe("Test Todo App", function() {
  it("Visit my local host and add input value", function() {
    cy.visit("/");
    cy.get('input[name="new-item"]')
      .type("Gå på promenad")
      .should("have.value", "Gå på promenad");
  });

  it("One item in DOM should contain input value", function() {
    cy.get("button").click();
    cy.get(".Item").should("contain", "Gå på promenad");
  });

  it("Above item should no longer exist since it's been marked as Done", function() {
    cy.get(".Item")
      .contains("Gå på promenad")
      .contains("Done")
      .click();
    cy.get(".Item")
      .contains("Gå på promenad")
      .should("not.exist");
  })

  it("No Item-element should exist since Clear All-button has been clicked", function() {
    cy.get('p[name="clear-all"]').click();
    cy.get(".Item").should("not.exist");
  });
});
