class UploadFileDemo{
    visitHomePage() {
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo');
    }

    getPageHeader() {
        return cy.get('h1');
    }
    
    getChooseFileButton(){
        return cy.get('#file');
    }

    getMessage() {
        return cy.get('#error');
    }
}

export default UploadFileDemo;