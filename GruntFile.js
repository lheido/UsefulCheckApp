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
    concat: {
      dist: {
        src: ['./bower_components/hammerjs/hammer.min.js', 'assets/js/modernizr.custom.4285.js', 'assets/js/functions.js', 'assets/js/dev.js'],
        dest: 'assets/js/dist.js',
      }
    },
    watch: {
      styles: {
        files: ['assets/scss/*.scss', "index.html"],
        tasks: ['sass:dist'],
      },
      scripts: {
        files: ['assets/js/dev.js', 'assets/js/functions.js'],
        tasks: ['concat:dist'],
      },
      options: {
        livereload: true
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['sass:dist']);
}
