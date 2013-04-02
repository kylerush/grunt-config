
/*
 *  Copyright 2013 outaTiME.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

module.exports = function (grunt) {

  'use strict';

  var path = require('path');

  grunt.registerMultiTask('config', 'Define specific target task configuration.', function () {

    var
      options = this.options({
        variables: {}
      }),
      variables = options.variables;

    grunt.verbose.writeflags(options, 'Options');

    Object.keys(variables).forEach(function (variable) {
      var value = variables[variable];
      grunt.log.writeln('Config ' + variable.cyan + ' -> ' + value.cyan);
      grunt.config.set(variable, value);
    });
  });

};
