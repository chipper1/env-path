let dotenv = require('dotenv');
let path = require('path');
let child_process = require('child_process');

const args = process.argv.slice(2);
const opts = {silent: true,};

// Check if a path option has been passed.
if (args[0] === '-p') {
  opts.path = path.resolve(process.cwd(), args[1]);
  // remove both args.
  args.splice(0, 2);
}

dotenv.config(opts);

const res = child_process.spawnSync(
  args[0],
  args.slice(1), {
    env: process.env,
    stdio: 'inherit',
  },
);

if (res.status) {
  process.exit(res.status);
} else if (res.error) {
  process.exit(1);
}