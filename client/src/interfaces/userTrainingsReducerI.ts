export interface userTrainingsState{
    trainings: Array<UserTrainingI>
}

export interface UserTrainingI{
    trainingNumber: number,
    title: string;
    completed: boolean,
    numberAttempts: number,
    spendedTime: number,
    speed: number,
    numberStars: number
}