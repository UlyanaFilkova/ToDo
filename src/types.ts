export enum ToDoStatus {
    Pending = "pending",
    InProgress = "inProgress",
    Completed = "completed",
}

export interface ToDo {
    id: number,
    title: string,
    description: string,
    status: ToDoStatus,
}