export default {
    plugins: [
      {
        name: 'removeAttrs',
        params: {
          attrs: '*:(stroke|fill):((?!^none$).)*'
        },
      },
      'preset-default'
    ],
};