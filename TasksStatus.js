// Overdue records. A small ServiceNow requirement to complete an exercise. Developed and Tested on 2026-06-02 03:28:18 UTC
// Classical object based creation
class Record {
    constructor (id, assignee, dueDate, severity, state, shortDescription) {
        this.id = id;
        this.assignee = assignee
        this.dueDate = dueDate
        this.severity = severity
        this.state = state
        this.shortDescription = shortDescription
    }
}

var odRecord1 = new Record("NITASK003001", "Beth Anglin",new Date("2026-05-25T13:55:00"), 3, 1, "Overdue")
var odRecord2 = new Record("NITASK003002", "Beth Anglin",new Date("2026-06-07T15:36:00"), 4, 2, "Not Overdue")
var odRecord3 = new Record("NITASK003003", "Beth Anglin",new Date("2026-05-12T20:53:00"), 3, 3, "Due date in past but record is closed")
var odRecord4 = new Record("NITASK003004", "Fred Luddy",new Date("2026-06-02T20:53:00"), 2, 1, "Overdue in 24hrs")
var odRecord5 = new Record("NITASK003005", "Ashley Parker",new Date("2026-06-02T20:53:00"), 4, 2, "Open for now. Will be closed after 24hrs")
var odRecord6 = new Record("NITASK003006", "Andrew Och",new Date("2026-06-02T20:53:00"), 2, 2, "Should be closed in 24hrs")
var odRecord7 = new Record("NITASK003007", "Abraham Lincoln",new Date("2026-06-02T20:53:00"), 1, 1, "Overdue by 24hrs")
var odRecord8 = new Record("NITASK003008", "Abraham Lincoln",new Date("2026-06-02T20:53:00"), 2, 1, "Will be closed after 24hrs")

// Traditional object based creation.
// var odRecord1 = {
//     id: "NITASK003001",
//     assignee: "Beth Anglin",
//     dueDate: new Date("2026-05-25T13:55:00"),
//     severity: 3,
//     state: 1,
//     shortDescription: "Overdue"
// }
// var odRecord2 = {
//     id: "NITASK003002",
//     assignee: "Beth Anglin",
//     dueDate: new Date("2026-06-07T15:36:00"),
//     severity: 4,
//     state: 2,
//     shortDescription: "Not Overdue"
// }
// var odRecord3 = {
//     id: "NITASK003003",
//     assignee: "Beth Anglin",
//     dueDate: new Date("2026-05-12T20:53:00"),
//     severity: 3,
//     state: 3,
//     shortDescription: "Due date in past but record is closed"
// }
// var odRecord4 = {
//     id: "NITASK003004",
//     assignee: "Fred Luddy",
//     dueDate: new Date("2026-06-02T20:53:00"),
//     severity: 2,
//     state: 1,
//     shortDescription: "Overdue in 24hrs"
// }
// var odRecord5 = {
//     id: "NITASK003005",
//     assignee: "Ashley Parker",
//     dueDate: new Date("2026-06-02T20:53:00"),
//     severity: 4,
//     state: 2,
//     shortDescription: "Open for now. Will be closed after 24hrs"
// }
// var odRecord6 = {
//     id: "NITASK003006",
//     assignee: "Andrew Och",
//     dueDate: new Date("2026-06-02T20:53:00"),
//     severity: 2,
//     state: 2,
//     shortDescription: "Should be closed in 24hrs"
// }
// var odRecord7 = {
//     id: "NITASK003007",
//     assignee: "Abraham Lincoln",
//     dueDate: new Date("2026-06-02T20:53:00"),
//     severity: 1,
//     state: 1,
//     shortDescription: "Overdue by 24hrs"
// }
// var odRecord8 = {
//     id: "NITASK003008",
//     assignee: "Abraham Lincoln",
//     dueDate: new Date("2026-06-02T20:53:00"),
//     severity: 2,
//     state: 1,
//     shortDescription: "Will be closed after 24hrs"
// }

var overdueRecords = [odRecord1, odRecord2, odRecord3, odRecord4, odRecord5, odRecord6, odRecord7, odRecord8]
var pastOverdues = []
var overduesByTomorrow = []
var closed = []
var soonOverdues = []

var rightNow = new Date()
var tomorrow = new Date(rightNow)
tomorrow.setDate(tomorrow.getDate() + 1)

for (let i = 0; i < overdueRecords.length; i++) {
    if ((overdueRecords[i].dueDate <= rightNow) && (overdueRecords[i].state != 3)) {
        pastOverdues.push(overdueRecords[i])
    } else if ((overdueRecords[i].dueDate >= rightNow && overdueRecords[i].dueDate <= tomorrow) && (overdueRecords[i].state != 3)) {
        overduesByTomorrow.push(overdueRecords[i])
    } else if (overdueRecords[i].state === 3) {
        closed.push(overdueRecords[i])
    } else if ((overdueRecords[i].dueDate >= tomorrow) && (overdueRecords[i].state != 3)) {
        soonOverdues.push(overdueRecords[i])
    }
}

if (pastOverdues.length != 0) {
    console.log("Tasks with past overdues are:")
    pastOverdues.forEach((item) => {
        console.log("Task with id " + item.id +  " is overdue.")
    })
} else {
    console.log("No past overdue tasks.")
}
console.log()
if (overduesByTomorrow.length != 0) {
    console.log("Tasks overdue by tomorrow are:")
    overduesByTomorrow.forEach((item) => {
        console.log("Task with id " + item.id +  " is going to be overdue by tomorrow.")
    })
} else {
    console.log("No tasks are overdue by tomorrow.")
}
console.log()
if (closed.length != 0) {
    console.log("Tasks which were closed are:")
    closed.forEach((item) => {
        console.log("Task with id " + item.id +  " is closed.")
    })
} else {
    console.log("No closed tasks.")
}
console.log()
if (soonOverdues.length != 0) {
    console.log("Tasks with sooner overdues are:")
    soonOverdues.forEach((item) => {
        console.log("Task with id " + item.id +  " is open and going to be overdue soon. Overdue by " + item.dueDate)
    })
} else {
    console.log("No tasks for overdue sooner.")
}

// Output:
/*
Tasks with past overdues are:
Task with id NITASK003001 is overdue.

Tasks overdue by tomorrow are:
Task with id NITASK003004 is going to be overdue by tomorrow.
Task with id NITASK003005 is going to be overdue by tomorrow.
Task with id NITASK003006 is going to be overdue by tomorrow.
Task with id NITASK003007 is going to be overdue by tomorrow.
Task with id NITASK003008 is going to be overdue by tomorrow.

Tasks which were closed are:
Task with id NITASK003003 is closed.

Tasks with sooner overdues are:
Task with id NITASK003002 is open and going to be overdue soon. Overdue by Sun Jun 07 2026 15:36:00 GMT+0000 (Coordinated Universal Time)
*/