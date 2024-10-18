enum DocumentSubmissionErrorCode {
    BadStructure = "400",
    MaximumSizeExceeded = "400",
    IncorrectSubmitter = "403",
    DuplicateSubmission = "422"
}

export default DocumentSubmissionErrorCode;