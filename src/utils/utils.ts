export const getObjectWithErrorMessage = (
  message: string
): { error: string } => {
  return {
    error: message,
  };
};
