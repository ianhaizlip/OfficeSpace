const args = ["run build"];
const opts = { stdio: "inherit", cwd: "officespace-frontend", shell: true };
require("child_process").spawn("npm", args, opts);
