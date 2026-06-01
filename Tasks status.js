// Overdue records. A small ServiceNow requirement to complete an exercise. Developed and Tested on 2026-06-01 09:11:35 UTC
var odRecord1 = {
    id: "NITASK003001",
    assignee: "Beth Anglin",
    dueDate: new Date("2026-05-25T13:55:00"),
    severity: 3,
    state: 1
}
var odRecord2 = {
    id: "NITASK003002",
    assignee: "Beth Anglin",
    dueDate: new Date("2026-06-07T15:36:00"),
    severity: 4,
    state: 2
}
var odRecord3 = {
    id: "NITASK003003",
    assignee: "Beth Anglin",
    dueDate: new Date("2026-05-12T20:53:00"),
    severity: 3,
    state: 3
}
var odRecord4 = {
    id: "NITASK003004",
    assignee: "Fred Luddy",
    dueDate: new Date("2026-06-01T20:53:00"),
    severity: 2,
    state: 1
}
var odRecord5 = {
    id: "NITASK003005",
    assignee: "Ashley Parker",
    dueDate: new Date("2026-06-01T20:53:00"),
    severity: 4,
    state: 2
}
var odRecord6 = {
    id: "NITASK003006",
    assignee: "Andrew Och",
    dueDate: new Date("2026-06-01T20:53:00"),
    severity: 2,
    state: 2
}
var odRecord7 = {
    id: "NITASK003007",
    assignee: "Abraham Lincoln",
    dueDate: new Date("2026-06-01T20:53:00"),
    severity: 1,
    state: 1
}
var odRecord8 = {
    id: "NITASK003008",
    assignee: "Abraham Lincoln",
    dueDate: new Date("2026-06-01T20:53:00"),
    severity: 2,
    state: 1
}

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
}
console.log()
if (overduesByTomorrow.length != 0) {
    console.log("Tasks overdue by tomorrow are:")
    overduesByTomorrow.forEach((item) => {
        console.log("Task with id " + item.id +  " is going to be overdue by tomorrow.")
    })
}
console.log()
if (closed.length != 0) {
    console.log("Tasks which were closed are:")
    closed.forEach((item) => {
        console.log("Task with id " + item.id +  " is closed.")
    })
}
console.log()
if (soonOverdues.length != 0) {
    console.log("Tasks with sooner overdues are:")
    soonOverdues.forEach((item) => {
        console.log("Task with id " + item.id +  " is open and going to be overdue soon. Overdue by " + item.dueDate)
    })
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