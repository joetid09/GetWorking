const fields = {
    JobTitle: { type: "text", name: "jobTitle", text: "Job Title", placeholder: "Title", required: true },
    Company: { type: "text", name: "company", text: "Company", required: true },
    DateApplied: { type: "date", name: "dateApplied", text: "Date Applied", required: true },
    Title: { type: "text", name: "title", text: "Event Title", required: true },
    DateCreated: { type: "date", name: "DateCreated", text: "Date Created" },
    DateToComplete: { type: "date", name: "DateToComplete", text: "Date to Complete", required: true },
    Body: { type: "textarea", name: "Body", text: "Notes", required: true }

}

export const ApplicationForm = [
    fields.JobTitle,
    fields.Company,
    fields.DateApplied
]

export const EventForm = [
    fields.Title,
    fields.DateCreated,
    fields.DateToComplete,
    fields.Body
]