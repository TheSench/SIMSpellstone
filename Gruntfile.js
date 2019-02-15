module.exports = function (grunt) {
    require('time-grunt')(grunt);
    const mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            shared: {
                src: [
                    'scripts/require.sync.js',
                    'scripts/polyfills.js',
                    //'scripts/require.config.js',
                    'scripts/modules/factions.js',
                    'scripts/modules/skillApi.js',
                    'scripts/modules/runeApi.js',
                    'scripts/modules/cardInfo.js',
                    'scripts/modules/matchTimer.js',
                    'scripts/modules/urlHelper.js',
                    'scripts/modules/storageAPI.js',

                    'scripts/modules/loadCardCache.js',
                    'scripts/modules/dataUpdater.js',
                    'scripts/modules/cardApi.js',

                    'scripts/modules/unitInfoHelper.js',
                    'scripts/modules/cardUI.js',

                    'scripts/modules/base64.js'
                ],
                dest: 'dist/shared.js'
            },
            deckbuilder: {
                src: [
                    'scripts/data/fixGlobals.js',
                    'scripts/deckbuilder.js',
                    'scripts/localstorage-controller.js',
                    'scripts/ng-card-details-controller.js',
                    'scripts/tutorial/deckbuilder-tutorial.js',
                    'scripts/sim-tutorial.js'
                ],
                dest: 'dist/deckbuilder.js'
            },
            engineTest: {
                src: [
                    'scripts/modules/config.js',
                    'scripts/modules/matchStats.js',

                    'scripts/mocks.js',

                    //'scripts/modules/debugLog.js',

                    //'scripts/modules/log.js',

                    'scripts/modules/debugMessages.js',
                    'scripts/modules/debugDisabled.js',

                    'scripts/modules/simController.js',

                    'scripts/modules/bgeApi.js',

                    'scripts/modules/loadDeck.js',

                    //'scripts/modules/startup.js',
                    'scripts/modules/simulatorBase.js',
                    'scripts/modules/singleThreaded.js',
                    'scripts/testSimEngine.js'
                ],
                dest: 'dist/engineTest.js'
            },
            simulator: {
                src: [
                    'scripts/modules/config.js',
                    'scripts/modules/matchStats.js',
                    'scripts/modules/debugLog.js',

                    'scripts/modules/log.js',

                    'scripts/modules/debugMessages.js',
                    'scripts/modules/debugDisabled.js',

                    'scripts/modules/simController.js',

                    'scripts/modules/bgeApi.js',

                    'scripts/modules/loadDeck.js',
                    'scripts/modules/animations.js',

                    'scripts/modules/ui.js',

                    'scripts/modules/startup.js',

                    'scripts/data/fixGlobals.js',
                    'scripts/modules/simulatorBase.js',
                    'scripts/modules/singleThreaded.js',
                    'scripts/ng-simulator-controller.js',
                    'scripts/localstorage-controller.js',
                    'scripts/gui_script.js',
                    'scripts/tutorial/simulator-tutorial.js',
                    'scripts/sim-tutorial.js'
                ],
                dest: 'dist/simulator.js'
            },
            practice: {
                src: [
                    '<%= concat.simulator.dest %>',
                    'scripts/cardBattle.js'
                ],
                dest: 'dist/practice.js'
            },
            /*
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
            */
            vendor: {
                src: [
                    'lib/jquery-3.3.1.min.js',
                    'lib/jquery-ui-1.12.1.custom/jquery-ui.min.js',
                    'lib/angular.min.js',
                    'lib/seedrandom.min.js'
                    //'lib/require.js'
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
            main: {
                options: {
                    mangle: false,
                    sourceMap: true
                },
                files: {
                    'dist/shared.min.js': ['<%= concat.shared.dest %>'],
                    'dist/deckbuilder.min.js': ['<%= concat.deckbuilder.dest %>'],
                    'dist/engineTest.min.js': ['<%= concat.engineTest.dest %>'],
                    'dist/simulator.min.js': ['<%= concat.simulator.dest %>'],
                    'dist/practice.min.js': ['<%= concat.practice.dest %>']
                }
            }
        },
        watch: {
            jhint: {
                files: [
                    'scripts/**/*.js'
                ],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            rebuild: {
                files: [
                    'register-worker.js',
                    'service-worker.js',
                    'scripts/**/*.js',
                    'html/**/*.html'
                ],
                tasks: ['build-main'],
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
            files: ['dist/*', '!dist/data.min.js'],
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
        },
        cacheBust: {
            static: {
                options: {
                    assets: [
                        '**/*.css',
                        'dist/shared.min.js',
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
                    'Titans.html',
                    'LivePvP.html'
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
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('concat-main', ['newer:concat:shared', 'newer:concat:deckbuilder', 'newer:concat:simulator', 'newer:concat:practice', 'newer:concat:engineTest']);
    grunt.registerTask('uglify-main', ['newer:uglify:main']);

    grunt.registerTask('full-build', ['clean', /*'jshint',*/ 'concat', 'sass', 'cssmin', 'imagemin', 'uglify', 'copy:html', 'cacheBust']);
    grunt.registerTask('build-main', ['concat-main', 'uglify-main', 'newer:copy:html', 'copy:html', 'cacheBust']);

    grunt.registerTask('default', ['full-build']);

    // On watch events configure jshint:all to only run on changed file
    // on watch events configure jshint:all to only run on changed file
    grunt.event.on('watch', function (action, filepath) {
        grunt.config(['jshint', 'all'], filepath);
    });
};