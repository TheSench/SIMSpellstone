module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            deckbuilder: {
                src: [
                    'scripts/shared.js',
                    'scripts/cards_gui.js',
                    'scripts/updateCards.js',
                    'scripts/deckbuilder.js',
                    'scripts/localstorage-controller.js',
                    'scripts/ng-card-details-controller.js',
                    'scripts/tutorial/deckbuilder-tutorial.js',
                    'scripts/sim-tutorial.js'
                ],
                dest: 'dist/deckbuilder.js'
            },
            simulator: {
                src: [
                    'scripts/updateCards.js',
                    'scripts/shared.js',
                    'scripts/sim_controller.js',
                    'scripts/simulator_base.js',
                    'scripts/single_threaded.js',
                    'scripts/ng-simulator-controller.js',
                    'scripts/localstorage-controller.js',
                    'scripts/gui_script_2.0.js',
                    'scripts/gui_script.js',
                    'scripts/cards_gui.js',
                    'scripts/tutorial/simulator-tutorial.js',
                    'scripts/sim-tutorial.js'
                ],
                dest: 'dist/simulator.js'
            },
            practice: {
                src: [
                    'scripts/updateCards.js',
                    'scripts/shared.js',
                    'scripts/sim_controller.js',
                    'scripts/single_threaded.js',
                    'scripts/simulator_base.js',
                    'scripts/card_battle.js',
                    'scripts/ng-simulator-controller.js',
                    'scripts/localstorage-controller.js',
                    'scripts/gui_script_2.0.js',
                    'scripts/gui_script.js',
                    'scripts/cards_gui.js',
                    'scripts/tutorial/simulator-tutorial.js',
                    'scripts/sim-tutorial.js'
                ],
                dest: 'dist/practice.js'
            },
            data: {
                src: [
                    'scripts/data/skills.js',
                    'scripts/data/cards.js',
                    'scripts/data/fusions.js',
                    'scripts/data/bges.js',
                    'scripts/data/mapBGEs.js',
                    'scripts/data/campaign.js',
                    'scripts/data/runes.js',
                    'scripts/data/raids.js',
                    'scripts/data/common.js'
                ],
                dest: 'dist/data.js'
            },
            vendor: {
                src: [
                    'lib/jquery-2.2.1.min.js',
                    'lib/jquery-ui-1.11.4.custom/jquery-ui.min.js',
                    'lib/angular.min.js',
                    'lib/googleAnalytics.js',
                ],
                dest: 'dist/vendor.js'
            },
            "lib-charts": {
                src: [
                    'lib/chartist/chartist.min.js',
                    'lib/chartist/chartist-plugin-legend.js',
                    'lib/chartist/chartist-plugin-tooltip.min.js'
                ],
                dest: 'dist/lib-charts.js'
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            data: {
                files: {
                    'dist/data.min.js': ['<%= concat.data.dest %>']
                }
            },
            deckbuilder: {
                mangle: false,
                files: {
                    'dist/deckbuilder.min.js': ['<%= concat.deckbuilder.dest %>']
                }
            },
            simulator: {
                mangle: false,
                files: {
                    'dist/simulator.min.js': ['<%= concat.simulator.dest %>']
                }
            },
            practice: {
                mangle: false,
                files: {
                    'dist/practice.min.js': ['<%= concat.practice.dest %>']
                }
            }
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'scripts/**/*.js',
                '!scripts/data/**'
            ],
            options: {
                // options here to override JSHint defaults
                undef: false,
                globals: {
                    $: true,
                    jQuery: true,
                    console: true,
                    angular: true,
                    document: true,
                    window: true,
                    BATTLEGROUNDS: true,
                    SIMULATOR: true,
                    CARDS: true,
                    FUSIONS: true,
                    storageAPI: true
                }
            }
        },
        /*
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'release/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'release/css',
                    ext: '.min.css'
                }]
            }
        },
        */
        clean: ['dist']
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean', /*'jshint', */'concat', /*'cssmin',*/ 'uglify']);

};