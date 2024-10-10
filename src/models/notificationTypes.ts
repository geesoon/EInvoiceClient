enum NotificationType {
    ProfileDataValidation = 3,
    DocumentReceived = 6,
    DocumentValidated = 7,
    DocumentCancelled = 8,
    UserProfileChanged = 10,
    TaxpayerProfileChanged = 11,
    DocumentRejectionInitiated = 15,
    ERPDataValidation = 26,
    DocumentsProcessingSummary = 33,
    DocumentTemplatePublished = 34,
    DocumentTemplateDeletion = 35,
}

export default NotificationType;