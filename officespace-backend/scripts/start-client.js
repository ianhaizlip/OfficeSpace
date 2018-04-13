const args = ["start"];
const opts = { stdio: "inherit", cwd: "officespace-frontend", shell: true };
require("child_process").spawn("npm", args, opts);
