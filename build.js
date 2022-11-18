async function build() {
    const esbuild = await import('esbuild');
    const buildInfo =
        {
            entryPoints: ["src/index.js"],
            bundle: true,
            minify: true,
            target: "es6",
            format: 'esm',
            sourcemap: true,
            outfile: 'dist/contents.js',
        }
    await esbuild.build(buildInfo);
    console.log("build finished");
}

build();
