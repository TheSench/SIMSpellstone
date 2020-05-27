module.exports = function (grunt) {
    const mozjpeg = require('imagemin-mozjpeg');
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            deckbuilder: {
                src: [
                    'scripts/data/fixGlobals.js',
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
                    'scripts/data/fixGlobals.js',
                    'scripts/updateCards.js',
                    'scripts/shared.js',
                    'scripts/sim_controller.js',
                    'scripts/single_threaded.js',
                    'scripts/simulator_base.js',
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
                    'scripts/data/fixGlobals.js',
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
                    'scripts/data/spoilers.js',
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
                    'lib/seedrandom.min.js'
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
                mangle: false,
                sourceMap: true
            },
            data: {
                mangle: false,
                files: {
                    'dist/data.min.js': ['<%= concat.data.dest %>']
                }
            },
            deckbuilder: {
                mangle: true,
                files: {
                    'dist/deckbuilder.min.js': ['<%= concat.deckbuilder.dest %>']
                }
            },
            simulator: {
                mangle: true,
                files: {
                    'dist/simulator.min.js': ['<%= concat.simulator.dest %>']
                }
            },
            practice: {
                mangle: true,
                files: {
                    'dist/practice.min.js': ['<%= concat.practice.dest %>']
                }
            }
        },
        watch: {
            scripts: {
                files: ['scripts/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'scripts/**/*.js',
                '!scripts/data/**'
            ],
            options: {
                // options here to override JSHint defaults
                undef: true,
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
                    storageAPI: true,
                    ArrayBuffer: true,
                    Int32Array: true,
                    Uint16Array: true
                }
            }
        },
        sass: {
            styles: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['carddetails.scss'],
                    dest: 'styles',
                    ext: '.css'
                }]
            },
            sass: {
                files: [{
                    expand: true,
                    cwd: 'styles/sass',
                    src: ['tutorial.scss', 'header.scss'],
                    dest: 'styles/sass',
                    ext: '.css'
                }]
            },
            themes: {
                files: [{
                    expand: true,
                    cwd: 'styles/sass/themes',
                    src: ['light.scss', 'dark.scss'],
                    dest: 'styles/sass/themes',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            main: {
                files: [{
                    src: [
                        'styles/sass/header.css',
                        'styles/card.css',
                        'styles/sass/tutorial.css',
                        'styles/loading.css'
                    ],
                    dest: 'dist/main.min.css'
                }]
            },
            deckbuilder: {
                files: [{
                    src: [
                        'styles/deckbuilder.css',
                        'styles/carddetails.css'
                    ],
                    dest: 'dist/deckbuilder.min.css'
                }]
            },
            spritesheet: {
                files: [{
                    src: [
                        'styles/spritesheet.css'
                    ],
                    dest: 'dist/spritesheet.min.css'
                }]
            },
            lightTheme: {
                files: [{
                    src: [
                        'styles/sass/themes/light.css'
                    ],
                    dest: 'dist/light.min.css'
                }]
            },
            darkTheme: {
                files: [{
                    src: [
                        'styles/sass/themes/dark.css'
                    ],
                    dest: 'dist/dark.min.css'
                }]
            }
        },
        clean: {
            files: [
                'dist/*',
                '!dist/data.min.js*'
            ]
        },
        imagemin: {
            sprites: {
                options: {
                    progressive: true,
                    optimizationLevel: 7,
                    use: [mozjpeg()]
                },
                files: [{
                    expand: true,
                    cwd: 'res/sprites',
                    src: ['**/*.jpg'],
                    dest: 'dist/sprites'
                }]
            }
        },
        copy: {
            html: {
                files: [
                    {
                        expand: true,
                        cwd: 'html',
                        src: ['**'],
                        dest: './'
                    },
                ],
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'Content/themes/base/images',
                        src: ['**'],
                        dest: './dist/images'
                    },
                ],
            },
        },
        cacheBust: {
            deckbuilder: {
                options: {
                    assets: [
                        '**/*.css',
                        'dist/main.min.js',
                        'dist/vendor.min.js',
                        'dist/deckbuilder.min.js',
                        'dist/practice.min.js',
                        'dist/simulator.min.js',
                        'lib/**'
                    ],
                    queryString: true
                },
                src: [
                    'DeckBuilder.html',
                    'Battle.html',
                    'Titans.html'
                ]
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('html', ['copy:html', 'cacheBust']);
    grunt.registerTask('data', ['concat:data', 'uglify:data']);
    grunt.registerTask('scripts',  function() {
        delete grunt.config.data.concat.data;
        delete grunt.config.data.uglify.data;
        grunt.task.run('concat');
        grunt.task.run('uglify');
        grunt.task.run('html');
    });
    grunt.registerTask('css',  function() {
        grunt.task.run('sass');
        grunt.task.run('cssmin');
        grunt.task.run('html');
    });
    grunt.registerTask('build', ['clean', /*'jshint', */'sass', 'cssmin', 'copy:images', 'imagemin', 'scripts']);

    grunt.registerTask('default', ['scripts']);

    // On watch events configure jshint:all to only run on changed file
    // on watch events configure jshint:all to only run on changed file
    grunt.event.on('watch', function (action, filepath) {
        grunt.config(['jshint', 'all'], filepath);
    });
};