module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            desenvolvimento: {
                options: {
                    paths: ['src/less']
                },
                files: {
                    'dist/css/estilo.css': 'src/less/estilo.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false // Para manter nomes de variáveis legíveis
            },
            meu_alvo: {
                files: {
                    'dist/js/script.min.js': ['src/js/script.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};
