module.exports = function (grunt) {
  require("time-group")(grunt);
  require("jit-grunt")(grunt, {
    useminPreepare: "grunt-usemin",
  });
  grunt.initConfig({
    sass: {
      //configuración herramienta de sass
      dist: {
        //genera la versión distribuida
        files: [
          {
            expand: true, //busca todos los archivos
            cwd: "css", //en la carpeta csss
            src: ["*.scss"], // que termininen con extensión .scss
            dest: "css", //los envia a la carpeta de distribucion
            ext: ".css", //los guarda con extensión css
          },
        ],
      },
    },

    watch: {
      files: ["css/*.scss"],
      task: ["css"],
    },

    browserSync: {
      dev: {
        bsFiles: {
          //browser files
          src: ["css/*.css", "*.html", "js./*.js"],
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./", //directorio base para nuestro servidor
          },
        },
      },
    },

    imagemin: {
      dynamic: {
        files: [
          {
            expand: true,
            cwd: "./",
            src: "images/*.{png,gif,jpg,jpeg}",
            dest: "dist/",
          },
        ],
      },
    },
  });

  // procedemos a instalar los paquetes o plugins
  //siempre que se instale grunt hay que agregarle las tareas
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  grunt.registerTask("css", ["sass"]);
  grunt.registerTask("img:compress", ["imagemin"]);
  grunt.registerTask("default", ["browserSync", "watch"]);
};
