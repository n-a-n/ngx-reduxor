module.exports = {
    /*
    * Actions generator
    */
    action: [{
      type: 'add',
      path: '{{ basePath }}/{{ folder name "actions" }}/{{kebabCase name}}.actions.ts',
      templateFile: './templates/basic/_actions.ts'
    }],
      
    /*
    * Reducer generator
    */
    reducer: [{
        type: 'add',
        path: '{{ basePath }}/{{ folder name "reducers" }}/{{kebabCase name}}.reducer.ts',
        templateFile: './templates/basic/_reducer.ts'
      },
      {
        type: 'add',
        path: '{{ basePath }}/{{ folder name "reducers"}}/{{kebabCase name}}.reducer.spec.ts',
        templateFile: './templates/basic/_reducer.spec.ts'
      }
    ],
      
    /*
      * Effect generator
      */
    effect: [{
      type: 'add',
      path: '{{ basePath }}/{{ folder name "effects" }}/{{kebabCase name}}.effects.ts',
      templateFile: './templates/basic/_effect.ts'
    }, {
      type: 'add',
      path: '{{ basePath }}/{{ folder name "effects" }}/{{kebabCase name}}.effects.spec.ts',
      templateFile: './templates/basic/_effects.spec.ts'
    }],
      
    /*
      * Service generator
      */
    service: [{
      type: 'add',
      path: '{{ basePath }}/{{ folder name "services" }}/{{kebabCase name}}.service.ts',
      templateFile: './templates/basic/_service.ts'
    }, {
      type: 'add',
      path: '{{ basePath }}/{{ folder name "services" }}/{{kebabCase name}}.service.spec.ts',
      templateFile: './templates/basic/_service.spec.ts'
    }]
  }