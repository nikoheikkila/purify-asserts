type Result = jest.CustomMatcherResult;

export const pass = (reason: string): Result => ({
    pass: true,
    message: () => reason,
});

export const fail = (reason: string): Result => ({
    pass: false,
    message: () => reason,
});
