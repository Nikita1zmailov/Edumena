
export const pages = () => {
   return app.gulp.src(app.path.src.pages)
      .pipe(app.gulp.dest(app.path.build.pages))
      .pipe(app.plugins.browserSync.stream());
}