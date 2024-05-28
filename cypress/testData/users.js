export const user = {
  name: "Alex",
  lastName: "Fly",
  password: "A1234567!a",
  email: generateRandomEmail(),
};


function generateRandomEmail() {
  const timestamp = new Date().getTime();
  return `testuser${timestamp}@example.com`;
}