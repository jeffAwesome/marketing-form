// Gruntfile.js
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['src/main.js'],
        tasks: ['jshint', 'uglify'],
        options: {
          interrupt: true,
        },
      },
    },

    jshint: {
      basic: ['src/main.js']
    },

    mocha: {
      all: {
        src: ['tests/testrunner.html'],
      },
      options: {
        run: true
      }
    },
    uglify: {
      basic: {
        files: {
          'dist/marketingform-min.js': ['src/main.js']
        }
      }
    }
  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};