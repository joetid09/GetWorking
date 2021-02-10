const fields = {
    JobTitle: { type: "text", name: "jobTitle", text: "Job Title", placeholder: "Title", required: true },
    Company: { type: "text", name: "company", text: "Company", required: true },
    DateApplied: { type: "datetime-local", name: "dateApplied", text: "Date Applied", required: true },
    Title: { type: "text", name: "title", text: "Event Title", required: true },
    DateCreated: { type: "datetime-local", name: "dateCreated", text: "Date Created" },
    DateToComplete: { type: "datetime-local", name: "dateToComplete", text: "Date to Complete", required: true },
    Body: { type: "textfield", name: "body", text: "Notes", required: true }

}

export const ApplicationForm = [
    fields.JobTitle,
    fields.Company,
    fields.DateApplied
]

export const EventCreateForm = [
    fields.Title,
    fields.Body,
    fields.DateCreated,
    fields.DateToComplete

]