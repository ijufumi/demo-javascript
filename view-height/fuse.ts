import { fusebox, sparky } from "fuse-box";

class Context {
  runServer: boolean = true;
  getConfig = () =>
    fusebox({
      target: "browser",
      entry: "src/index.tsx",
  	  webIndex: {
        template: "dist/index.html",
      },
      cache : true,
      devServer: this.runServer,
  });
}
const { task } = sparky<Context>(Context);

task("default", async ctx => {
  const fuse = ctx.getConfig();
  await fuse.runDev();
});

task("preview", async ctx => {
  const fuse = ctx.getConfig();
  await fuse.runProd({ uglify: false });
});
task("dist", async ctx => {
  ctx.runServer = false;
  const fuse = ctx.getConfig();
  await fuse.runProd({ 
    uglify: false,
    bundles: {
      app: { path: 'app.$hash.js', publicPath: 'dist' },
    }
   });
});
