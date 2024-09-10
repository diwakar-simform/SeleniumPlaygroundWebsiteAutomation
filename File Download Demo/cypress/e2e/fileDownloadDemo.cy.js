/// <reference types="Cypress"/>

import FileDownloadDemo from "../pageObjects/fileDownloadDemo"

describe('File Download Demo', () => {

  const download = new FileDownloadDemo();

  beforeEach(()=> {
    download.visitHomePage();
  });

  it.only('Validate: Page Heading', function() {
    const pageHeading = "File Download Demo";
    download.getPageHeader().should('have.text',pageHeading);
  })

  it.only('Validate: Generating Text File and downloading Successfully', function() {
    const data = "Dummy data";
    download.getInputTextBox().type(data);
    download.getGenerateFileButton().click();
    download.getDownloadButton().should('be.visible').click();
  })
  
})