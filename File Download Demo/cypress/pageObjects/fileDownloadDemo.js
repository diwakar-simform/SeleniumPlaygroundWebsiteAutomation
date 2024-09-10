class FileDownloadDemo {
    visitHomePage() {
        cy.visit('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');
    }

    getPageHeader() {
        return cy.get('h1');
    }

    getInputTextBox() {
        return cy.get('#textbox');
    }

    getGenerateFileButton() {
        return cy.get('#create');
    }

    getDownloadButton() {
        return cy.get('#link-to-download');
    }
}

export default FileDownloadDemo;