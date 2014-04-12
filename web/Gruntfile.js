module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
          options: {
            includePaths: ['bower_components/foundation/scss/foundation/components/']
          },
          dist: {
            options: {
              outputStyle: 'compressed'
            },
            files: {
              'css/app.css': 'scss/app.scss'
            }        
          }
        },

        watch: {           
            sass: {
              files: 'scss/**/*.scss',
              tasks: ['sass']
            }            
        }                

    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('build', ['sass', 'watch']);
    grunt.registerTask('default', ['build']);

};