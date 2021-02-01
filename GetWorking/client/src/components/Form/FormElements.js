const fields = {
    JobTitle: { type: "text", name: "jobTitle", text: "Job Title", placeholder: "Title", required: true },
    Company: { type: "text", name: "company", text: "Company", required: true },
    DateApplied: { type: "date", name: "dateApplied", text: "Date Applied", required: true },
}

export const ApplicationForm = [
    fields.JobTitle,
    fields.Company,
    fields.DateApplied
]