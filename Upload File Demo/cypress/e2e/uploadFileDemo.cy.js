/// <reference types = "Cypress"/>

import UploadFileDemo from "../pageObjects/uploadFileDemo";

describe('Upload File Demo: using cypress-file-upload', function() {
    
    const upload = new UploadFileDemo

    beforeEach('Visit Home Page', function() {
        const pageHeading = "Upload File Demo";
        upload.visitHomePage();
        upload.getPageHeader().should('have.text',pageHeading);
    })
    
    it('Validate: Success Message for uploading valid File(.png): ', function() {
        const errorMessage = "File Successfully Uploaded";
        upload.getChooseFileButton().attachFile('db.png');
        upload.getMessage().should('have.text',errorMessage);
    })

    it('Validate: Error Message for uploading larger File(.pdf)', function() {
        const successMessage = "File size should not be greater than 5MB";
        upload.getChooseFileButton().attachFile('Fin.pdf');
        upload.getMessage().should('have.text',successMessage);
    })

    it('Validate: Error Message for uploading invalid file(.txt) type', function() {
        const errorMessage = "File type should be pdf, png, jpeg or jpg";
        upload.getChooseFileButton().attachFile('DBQuestionPractice.txt');
        upload.getMessage().should('have.text', errorMessage);
    })
})