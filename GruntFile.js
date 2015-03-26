module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          update: true
        },
        files: {
          "assets/css/design.css": "assets/scss/design.scss"
        }
      }
    },
    watch: {
      styles: {
        files: ['assets/scss/*.scss', "index.html"],
        tasks: ['sass:dist'],
      },
      options: {
        livereload: true
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass:dist']);
}
