'use strict';
module.exports = function(grunt) {

  // ----------------------------------------------------------
  // WARNING, BRAVE DEVELOPER
  // ----------------------------------------------------------
  // Webhook allows you to use local grunt tasks and files.
  // However, these tasks are ONLY RUN LOCALLY and not when
  // your live site needs to be rebuilt. This means you should
  // only use grunt for pre-processing tasks like building
  // Sass, less or coffescript files, not for reading things
  // from your templates and making dynamic changes during
  // the build process. Doing so will cause your live site
  // not to regenerate.
  //
  // You have been warned!
  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded',
          quiet: true,
          update: true,
          force: true
        },
        files: [{
          expand: true,
          cwd: 'static/scss',
          src: ['*.scss'],
          dest: 'static/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files:['static/scss/**/*.scss'],
        tasks: ['force:on', 'sass', 'force:reset', 'build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-force');

  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
};
