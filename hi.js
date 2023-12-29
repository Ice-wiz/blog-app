// const GITHUB_ID = "Iv1.d28a078e418af673";
// const GITHUB_SECRET = "2816864ee8753023affc4481bffe0290aeabdd83";
// const NEXTAUTH_URL = "http://localhost:3000/";
// const NEXTAUTH_URLSECRET = "83b639984fdc723ac9d1021b17167d12";

// const saveEnv = (name, value) => {
//     process.env[name] = value;
//     let x = process.env[name];
//     console.log(x);
// }

// const array = ['GITHUB_ID', 'GITHUB_SECRET', 'NEXTAUTH_URL', 'NEXTAUTH_URLSECRET'];

// for (const val of array) {
//     saveEnv(val, eval(val));
// }

const GITHUB_ID = "Iv1.d28a078e418af673";
const GITHUB_SECRET = "2816864ee8753023affc4481bffe0290aeabdd83";
const NEXTAUTH_URL = "http://localhost:3000/";
const NEXTAUTH_URLSECRET = "83b639984fdc723ac9d1021b17167d12";

const saveEnv = (name, value) => {
  process.env[name] = value;
  let x = process.env[name];
  console.log(x);
};

const array = [
  ['GITHUB_ID', GITHUB_ID],
  ['GITHUB_SECRET', GITHUB_SECRET],
  ['NEXTAUTH_URL', NEXTAUTH_URL],
  ['NEXTAUTH_URLSECRET', NEXTAUTH_URLSECRET],
];

for (const [name, value] of array) {
  saveEnv(name, value);
}

