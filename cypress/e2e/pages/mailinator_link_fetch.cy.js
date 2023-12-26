export class mailinatorEmailFetch {

    searchEmail(useremail){
    cy.get('#search').type(useremail)
    }
    

    mailinatorNavigation(){
    cy.get('#site-header > .g5core-top-bar > .container > .g5core-top-bar-inner > .g5core-top-bar-left > .g5core-top-bar-item > button').click()

    cy.get('#row_paul-1693295370-222947022 > [style="width:300px;max-width:300px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 22px;"]').click()

    // cy.scrollTo(0, 500)
    }
}
